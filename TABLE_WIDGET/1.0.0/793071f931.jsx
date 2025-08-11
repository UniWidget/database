/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */

const types = {
  isInvisibleWidget: false,
  type: "TABLE_WIDGET",
  icon: "https://example.cn",
  title: "表格控件",
  version: "1.0.0",
  isGlobalWidget: false,
  properties: [
    {
      key: "headers",
      label: "表头",
      valueType: "string",
      defaultValue: "",
    },
    {
      key: "rows",
      label: "行数",
      valueType: "number",
      defaultValue: 3,
    },
    {
      key: "cols",
      label: "列数",
      valueType: "number",
      defaultValue: 3,
    },
    {
      key: "cellWidth",
      label: "单元格宽度",
      valueType: "number",
      defaultValue: 100,
    },
    {
      key: "cellHeight",
      label: "单元格高度",
      valueType: "number",
      defaultValue: 50,
    },
    {
      key: "mergedCells",
      label: "合并单元格",
      valueType: "string",
      defaultValue: "",
    },
  ],
  methods: [],
  events: [],
};

class TableWidget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.headers = props.headers.split(",");
    this.rows = props.rows;
    this.cols = props.cols;
    this.cellWidth = props.cellWidth;
    this.cellHeight = props.cellHeight;
    this.mergedCells = this.parseMergedCells(props.mergedCells);
  }

  parseMergedCells(mergedCellsStr) {
    if (!mergedCellsStr) return [];
    const mergedCells = [];
    const cellPairs = mergedCellsStr.split(",");
    cellPairs.forEach((pair) => {
      const [startCell, endCell] = pair.split("-");
      const startRow = parseInt(startCell[1]) - 1;
      const startCol = startCell.charCodeAt(0) - "A".charCodeAt(0);
      const endRow = parseInt(endCell[1]) - 1;
      const endCol = endCell.charCodeAt(0) - "A".charCodeAt(0);
      mergedCells.push({ startRow, startCol, endRow, endCol });
    });
    return mergedCells;
  }

  isCellMerged(row, col) {
    return this.mergedCells.some((cell) => {
      return row >= cell.startRow && row <= cell.endRow && col >= cell.startCol && col <= cell.endCol;
    });
  }

  render() {
    return (
      <table style={{ borderCollapse: "collapse" }}>
        {this.headers.length > 0 && (
          <thead>
            <tr>
              {this.headers.map((header, colIndex) => (
                <th
                  key={colIndex}
                  style={{ border: "1px solid black", width: this.cellWidth, height: this.cellHeight }}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {Array.from({ length: this.rows }, (_, rowIndex) => (
            <tr key={rowIndex}>
              {Array.from({ length: this.cols }, (_, colIndex) => {
                if (this.isCellMerged(rowIndex, colIndex)) {
                  return null;
                }
                return (
                  <td
                    key={colIndex}
                    style={{ border: "1px solid black", width: this.cellWidth, height: this.cellHeight }}
                  >
                    {`(${rowIndex + 1}, ${String.fromCharCode(colIndex + 65)})`}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

exports.types = types;
exports.widget = TableWidget;
