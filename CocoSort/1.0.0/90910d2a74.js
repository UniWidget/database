/*tim sort form https://segmentfault.com/a/1190000020280815?utm_source=tag-newest*/
Array.prototype.timsort = function (comp) { var global_a = this; var MIN_MERGE = 32; var MIN_GALLOP = 7; var runBase = []; var runLen = []; var stackSize = 0; var compare = comp; sort(this, 0, this.length, compare); function sort(a, lo, hi, compare) { if (typeof compare != "function") { throw new Error("Compare is not a function."); return } stackSize = 0; runBase = []; runLen = []; rangeCheck(a.length, lo, hi); var nRemaining = hi - lo; if (nRemaining < 2) return; if (nRemaining < MIN_MERGE) { var initRunLen = countRunAndMakeAscending(a, lo, hi, compare); binarySort(a, lo, hi, lo + initRunLen, compare); return } var ts = []; var minRun = minRunLength(nRemaining); do { var runLenVar = countRunAndMakeAscending(a, lo, hi, compare); if (runLenVar < minRun) { var force = nRemaining <= minRun ? nRemaining : minRun; binarySort(a, lo, lo + force, lo + runLenVar, compare); runLenVar = force } pushRun(lo, runLenVar); mergeCollapse(); lo += runLenVar; nRemaining -= runLenVar } while (nRemaining != 0); mergeForceCollapse() } function binarySort(a, lo, hi, start, compare) { if (start == lo) start++; for (; start < hi; start++) { var pivot = a[start]; var left = lo; var right = start; while (left < right) { var mid = (left + right) >>> 1; if (compare(pivot, a[mid]) < 0) right = mid; else left = mid + 1 } var n = start - left; switch (n) { case 2: a[left + 2] = a[left + 1]; case 1: a[left + 1] = a[left]; break; default: arraycopy(a, left, a, left + 1, n) }a[left] = pivot } } function countRunAndMakeAscending(a, lo, hi, compare) { var runHi = lo + 1; if (compare(a[runHi++], a[lo]) < 0) { while (runHi < hi && compare(a[runHi], a[runHi - 1]) < 0) { runHi++ } reverseRange(a, lo, runHi) } else { while (runHi < hi && compare(a[runHi], a[runHi - 1]) >= 0) { runHi++ } } return runHi - lo } function reverseRange(a, lo, hi) { hi--; while (lo < hi) { var t = a[lo]; a[lo++] = a[hi]; a[hi--] = t } } function minRunLength(n) { var r = 0; return n + 1 } function pushRun(runBaseArg, runLenArg) { runBase[stackSize] = runBaseArg; runLen[stackSize] = runLenArg; stackSize++ } function mergeCollapse() { while (stackSize > 1) { var n = stackSize - 2; if (n > 0 && runLen[n - 1] <= runLen[n] + runLen[n + 1]) { if (runLen[n - 1] < runLen[n + 1]) n--; mergeAt(n) } else if (runLen[n] <= runLen[n + 1]) { mergeAt(n) } else { break } } } function mergeForceCollapse() { while (stackSize > 1) { var n = stackSize - 2; if (n > 0 && runLen[n - 1] < runLen[n + 1]) n--; mergeAt(n) } } function mergeAt(i) { var base1 = runBase[i]; var len1 = runLen[i]; var base2 = runBase[i + 1]; var len2 = runLen[i + 1]; runLen[i] = len1 + len2; if (i == stackSize - 3) { runBase[i + 1] = runBase[i + 2]; runLen[i + 1] = runLen[i + 2] } stackSize--; var k = gallopRight(global_a[base2], global_a, base1, len1, 0, compare); base1 += k; len1 -= k; if (len1 == 0) return; len2 = gallopLeft(global_a[base1 + len1 - 1], global_a, base2, len2, len2 - 1, compare); if (len2 == 0) return; if (len1 <= len2) mergeLo(base1, len1, base2, len2); else mergeHi(base1, len1, base2, len2) } function gallopLeft(key, a, base, len, hint, compare) { var lastOfs = 0; var ofs = 1; if (compare(key, a[base + hint]) > 0) { var maxOfs = len - hint; while (ofs < maxOfs && compare(key, a[base + hint + ofs]) > 0) { lastOfs = ofs; ofs = (ofs << 1) + 1; if (ofs <= 0) ofs = maxOfs } if (ofs > maxOfs) ofs = maxOfs; lastOfs += hint; ofs += hint } else { var maxOfs = hint + 1; while (ofs < maxOfs && compare(key, a[base + hint - ofs]) <= 0) { lastOfs = ofs; ofs = (ofs << 1) + 1; if (ofs <= 0) ofs = maxOfs } if (ofs > maxOfs) ofs = maxOfs; var tmp = lastOfs; lastOfs = hint - ofs; ofs = hint - tmp } lastOfs++; while (lastOfs < ofs) { var m = lastOfs + ((ofs - lastOfs) >>> 1); if (compare(key, a[base + m]) > 0) lastOfs = m + 1; else ofs = m } return ofs } function gallopRight(key, a, base, len, hint, compare) { var ofs = 1; var lastOfs = 0; if (compare(key, a[base + hint]) < 0) { var maxOfs = hint + 1; while (ofs < maxOfs && compare(key, a[base + hint - ofs]) < 0) { lastOfs = ofs; ofs = (ofs << 1) + 1; if (ofs <= 0) ofs = maxOfs } if (ofs > maxOfs) ofs = maxOfs; var tmp = lastOfs; lastOfs = hint - ofs; ofs = hint - tmp } else { var maxOfs = len - hint; while (ofs < maxOfs && compare(key, a[base + hint + ofs]) >= 0) { lastOfs = ofs; ofs = (ofs << 1) + 1; if (ofs <= 0) ofs = maxOfs } if (ofs > maxOfs) ofs = maxOfs; lastOfs += hint; ofs += hint } lastOfs++; while (lastOfs < ofs) { var m = lastOfs + ((ofs - lastOfs) >>> 1); if (compare(key, a[base + m]) < 0) ofs = m; else lastOfs = m + 1 } return ofs } function mergeLo(base1, len1, base2, len2) { var a = global_a; var tmp = a.slice(base1, base1 + len1); var cursor1 = 0; var cursor2 = base2; var dest = base1; a[dest++] = a[cursor2++]; if (--len2 == 0) { arraycopy(tmp, cursor1, a, dest, len1); return } if (len1 == 1) { arraycopy(a, cursor2, a, dest, len2); a[dest + len2] = tmp[cursor1]; return } var c = compare; var minGallop = MIN_GALLOP; outer: while (true) { var count1 = 0; var count2 = 0; do { if (compare(a[cursor2], tmp[cursor1]) < 0) { a[dest++] = a[cursor2++]; count2++; count1 = 0; if (--len2 == 0) break outer } else { a[dest++] = tmp[cursor1++]; count1++; count2 = 0; if (--len1 == 1) break outer } } while ((count1 | count2) < minGallop); do { count1 = gallopRight(a[cursor2], tmp, cursor1, len1, 0, c); if (count1 != 0) { arraycopy(tmp, cursor1, a, dest, count1); dest += count1; cursor1 += count1; len1 -= count1; if (len1 <= 1) break outer } a[dest++] = a[cursor2++]; if (--len2 == 0) break outer; count2 = gallopLeft(tmp[cursor1], a, cursor2, len2, 0, c); if (count2 != 0) { arraycopy(a, cursor2, a, dest, count2); dest += count2; cursor2 += count2; len2 -= count2; if (len2 == 0) break outer } a[dest++] = tmp[cursor1++]; if (--len1 == 1) break outer; minGallop-- } while (count1 >= MIN_GALLOP | count2 >= MIN_GALLOP); if (minGallop < 0) minGallop = 0; minGallop += 2 } this.minGallop = minGallop < 1 ? 1 : minGallop; if (len1 == 1) { arraycopy(a, cursor2, a, dest, len2); a[dest + len2] = tmp[cursor1] } else if (len1 == 0) { throw new Error("IllegalArgumentException. Comparison method violates its general contract!"); } else { arraycopy(tmp, cursor1, a, dest, len1) } } function mergeHi(base1, len1, base2, len2) { var a = global_a; var tmp = a.slice(base2, base2 + len2); var cursor1 = base1 + len1 - 1; var cursor2 = len2 - 1; var dest = base2 + len2 - 1; a[dest--] = a[cursor1--]; if (--len1 == 0) { arraycopy(tmp, 0, a, dest - (len2 - 1), len2); return } if (len2 == 1) { dest -= len1; cursor1 -= len1; arraycopy(a, cursor1 + 1, a, dest + 1, len1); a[dest] = tmp[cursor2]; return } var c = compare; var minGallop = MIN_GALLOP; outer: while (true) { var count1 = 0; var count2 = 0; do { if (compare(tmp[cursor2], a[cursor1]) < 0) { a[dest--] = a[cursor1--]; count1++; count2 = 0; if (--len1 == 0) break outer } else { a[dest--] = tmp[cursor2--]; count2++; count1 = 0; if (--len2 == 1) break outer } } while ((count1 | count2) < minGallop); do { count1 = len1 - gallopRight(tmp[cursor2], a, base1, len1, len1 - 1, c); if (count1 != 0) { dest -= count1; cursor1 -= count1; len1 -= count1; arraycopy(a, cursor1 + 1, a, dest + 1, count1); if (len1 == 0) break outer } a[dest--] = tmp[cursor2--]; if (--len2 == 1) break outer; count2 = len2 - gallopLeft(a[cursor1], tmp, 0, len2, len2 - 1, c); if (count2 != 0) { dest -= count2; cursor2 -= count2; len2 -= count2; arraycopy(tmp, cursor2 + 1, a, dest + 1, count2); if (len2 <= 1) break outer } a[dest--] = a[cursor1--]; if (--len1 == 0) break outer; minGallop-- } while (count1 >= MIN_GALLOP | count2 >= MIN_GALLOP); if (minGallop < 0) minGallop = 0; minGallop += 2 } this.minGallop = minGallop < 1 ? 1 : minGallop; if (len2 == 1) { dest -= len1; cursor1 -= len1; arraycopy(a, cursor1 + 1, a, dest + 1, len1); a[dest] = tmp[cursor2] } else if (len2 == 0) { throw new Error("IllegalArgumentException. Comparison method violates its general contract!"); } else { arraycopy(tmp, 0, a, dest - (len2 - 1), len2) } } function rangeCheck(arrayLen, fromIndex, toIndex) { if (fromIndex > toIndex) throw new Error("IllegalArgument fromIndex(" + fromIndex + ") > toIndex(" + toIndex + ")"); if (fromIndex < 0) throw new Error("ArrayIndexOutOfBounds " + fromIndex); if (toIndex > arrayLen) throw new Error("ArrayIndexOutOfBounds " + toIndex); } }; function arraycopy(s, spos, d, dpos, len) { var a = s.slice(spos, spos + len); while (len--) { d[dpos + len] = a[len] } }

const CocoSort_types = {
    type: 'CocoSort',
    icon: 'https://static.codemao.cn/appcraft/extension-widgets/production/blink-button.svg',
    title: 'CocoSort',
    isInvisibleWidget: true,
    isGlobalWidget: true,
    properties: [],
    methods: [
        {
            key: 'Sort',
            label: '排序',
            params: [
                {
                    key: 'list',
                    label: '列表',
                    valueType: ['string', 'number', 'boolean', 'color', 'array', 'object'],
                    defaultValue: ""
                },
                {
                    key: "mode",
                    label: "顺序",
                    valueType: "string",
                    dropdown: [
                        { label: "降序", value: "J" },
                        { label: "升序", value: "S" }
                    ]
                },
                {
                    key: "algorithm",
                    label: "使用算法",
                    valueType: "string",
                    dropdown: [
                        { label: "JS默认排序", value: "js" },
                        { label: "Tim排序", value: "tim" }
                    ]
                },
                {
                    key: "key",
                    label: "列(索引从1开始，一维数组填0)",
                    valueType: "number",
                    defaultValue: 0
                }
            ],
            valueType: "array"
        }
    ],
    events: [],
};
//function getCmpFunc(key,mode){
//    if(mode == "J"){
//        if(key==0)
//        return function(a,b){return b-a;};
//        return function(a,b){return b[key-1]-a[key-1];};
//    }else{
//        if(key==0)
//        return function(a,b){return a-b;};
//        return function(a,b){return a[key-1]-b[key-1];};
//    }
//};
class CocoSort_Widget extends InvisibleWidget {
    
    //Sort = (list, mothod, key) => {
    //    if (key == 0) {
    //        if (mothod == "js") {
    //            return (list.slice().sort(function (a, b) { return a - b }));
    //        } else if (mothod == "tim") {
    //            var arr = list.slice()
    //            arr.timsort(function (a, b) { return a - b });
    //            return (arr);
    //        }
    //    }
    //    else {
    //        if (mothod == "js") {
    //            return (list.slice().sort(function (a, b) { return a[key - 1] - b[key - 1] }));
    //        } else if (mothod == "tim") {
    //            var arr = list.slice()
    //            arr.timsort(function (a, b) { return a[key - 1] - b[key - 1] });
    //            return (arr);
    //        }
    //    }
    //};
    Sort = (list, mode,algorithm, key) => {
        var arr = list.slice();
        if(algorithm=="js"){
            if(mode == "J"){
                if(key==0) arr.sort(function(a,b){return b-a;});
                else arr.sort(function(a,b){return b[key-1]-a[key-1];});
            }else{
                if(key==0)arr.sort(function(a,b){return a-b;});
                else arr.sort(function(a,b){return a[key-1]-b[key-1];});
            }
        }else if(algorithm=="tim"){
            if(mode == "J"){
                if(key==0)arr.timsort(function(a,b){return b-a;});
                else arr.timsort(function(a,b){return b[key-1]-a[key-1];});
            }else{
                if(key==0)arr.timsort(function(a,b){return a-b;});
                else arr.timsort(function(a,b){return a[key-1]-b[key-1];});
            }
        }
        return arr;
    }
}
exports.types = CocoSort_types;
exports.widget = CocoSort_Widget;