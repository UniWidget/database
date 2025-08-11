var HEAD;


var document = this.document;
HEAD = ((document).getElementByTagName('HEAD'))[0];

const types = {
  isInvisibleWidget: false,
  type: "CYAN_PYTHON_WIDGET",
  icon: "https://m.baidu.com/baidu.php?url=Ks00000EAMrnlPLIyhymg_0-wiuYjxuUiZHqmxMQUOcOuCaCZVCsKh8PuO-lL4USV_xwGBC8wNUZfZ-yhblBgel32mkyrLF_a3qB4jV5qgpYD_3rnOYX3s1X67gHGzeKm9AjM3nEGap3tAB_t5jVAqEg3EVprXqViWLjBUUDjYyR8dE92vd3Zt_hvFx5oecUS3EwOVkjtUmeiwiNQX6PFk999f2g.DD_NR2Ar5Od66kYymCO2GPK-dI-pcnUrGnTZHgYsUXxIhl61JmooLIPIheT_Hj_TII--IXOFCyAp7BEI8vU-.U1Yz0ZDqTZ-YpAq80ZKGm1Yk0ZK1pyI85H04mHPWuHwWmWuWrjfsuj-bP1whmvDknhRknW04nhRY0ZfqTZ-YpAq8zrEjkULn_ts-nWBLkerW1So58aRzrfKGUHYznWn0u1dLugK1nfKdpHY0TA-b5H60mv-b5Hnsn6KVIjY1PW0kg1DsnHIxnW0dnNtznjmzg1DsPH7xn10dnfKopHYs0ZFY5HDYnfKBpHYkPH9xnW0vg1Rsndtznj0sn-tznj01nfKVm1Y1PW0kg1DsnHIxnW0dnNtkg1DsnNtknjD0TgKGujYs0Z7Wpyfqn0KzuLw9u1Ys0A7B5HKxn0K-ThTqn0KsTjYs0A4vTjYsQW0snj0snj0s0AdYTjYs0AwbUL0qnfKzpWYs0Aw-IWdLpgP-0AuY5Hc0TA6qn0KET1Yz0AFL5Hf0UMfqnfK1XWY1nWKxnH0snfK9TdqGuAnqTZnVuLGCXZb0pywW5R9rf6KspZ-LpjYLnWKxnHmsn0KspZw45fKYmgFMugfqn17xn1DYg1D40ZwdT1YzPWndn1nYPW64njDknHb1n1fd0ZF-TgfqnHmvPH6YnWmLPW6Ln6K1pyfqrA7WPHTkrAcsrj01rAFWPfKWTvYqwWFanYf3PRnvfW97nbc4f6K9m1Yk0ZK85H00TydY5H00Tyd15H00uANYgvPsmHYznfKlIjYs0AdWgvuzUvYqn7tsg1Kxn7tsg100uA78IyF-gLK_my4GuZnqn7tsg1Kxn7tYPWRsnjcYg1RvPHR4PWb0TA7Ygvu_myTqn0KWIjYznjDsPznsg1csnH0Yc1KxnW0knjcWP-tznjRsnBnkg1csnW0kc1uxnW01njcWrfKbmv-b5H00ugwGujYVnfK9TLKWm1Ys0ZNspy4Wm1Ys0Z7VuWYs0AuWIgfqn0KGTvP_5H00mywhUA7M5HD0UAuW5H00uAPWujYvnDN7nYFjfHfvPbRzPWTsfYDznWbvPbR1fbu7njRYrgss0Zwzmyw-5HmLnjRsnfKBuA-b5HTYwWNDnj-DPRRYnWTkwHmsfHb3njcdf1KKnWR4nH0d0ZIhThqV5HDsnjDkrHF40AqW5HD0mMfqnsKEmgwL5H00ULfqnfKETMKY5HcWnan1c1cWnHc3P1mYPjmvc1fLnj0sc1fLnj0sQWfvrjTdnanzc1cWnanVc108nj0dPWDdc1D8nj0snH0sc1DWnansQW0snj0sn0KBmy4omyPW5H0Wn1R0XZPYIHYzPHRvnHR1P0KkgLmqna33n-tsQW0sg108njKxna3vnNtsQW0Yg1Kxna3krNts0AF1gLKzUvwGujYs0ZFEpyu_myTqP0KWIWY0pgPxmLK95H00mL0qn0K-TLfqn0KWThnqPj03PjT&us=newvui&xst=m1YvnDN7nYFjfHfvPbRzPWTsfYDznWbvPbR1fbu7njRYrgss0ycqP1wAPRfsrRfdwHfzP177PWKKrH6snWNjnDDzPHbknjRKT1Y4rHb4PHc1n164PHbYrjbLn1f4g1czndtk0gTqTZ-YpAq8zrEjkULn_tsCVtX1CtOJ1e6G0gDqTZ-YpAq80gRqnWRdPWDdn1fKIjYkPWmdrjfzPWTL0ydk5H0an0cV0yPC5yuW0ykd5H0Kmv3qULK1nH0snHD4nMbKnHn4rHf3Pjb4Ps&ai=0_428660788_1&word=&qid=8ac5718b08038bc5&bdrank=1&rank=2&sourceid=111&placeid=1&sht=1001192y&shh=m.baidu.com&ck=0.0.0.0.0.0.0.0.0.0.0",
  title: "PY控件",
  version: "1.0.0",
  isGlobalWidget: false,
  properties: [
    {
      key: '__width',
      label: '宽度',
      valueType: 'number',
      defaultValue: 200,
      blockOptions: {
        generateBlock: false,
      },
    },
    {
      key: '__height',
      label: '高度',
      valueType: 'number',
      defaultValue: 150,
      blockOptions: {
        generateBlock: false,
      },
    },
    {
      key: '__size',
      label: '',
      valueType: 'number',
      defaultValue: 0,
      readonly: true,
      blockOptions: {
        setter: {
          keys: ['__height', '__width'],
        },
        getter: {
          keys: ['__height', '__width'],
        },
      },
    },
  ],
  methods: [],
  events: [],
};

class Widget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.__width = props.__width;
    this.__height = props.__height;
    HEAD.appendChild('<link rel="stylesheet" href="https://pyscript.net/alpha/pyscript.css"/><script defer src="https://pyscript.net/alpha/pyscript.js"></script>');

  }
  render() {
    return(
      React.createElement("div", {  style: (this.cssStyle),
    }, [React.createElement("py-script", {}, [(this.pythonCode)]),])
  );

  }
}

types['properties'].push({
    key: 'pythonCode',
    label: 'PY代码',
    valueType: 'string',
    editorType: 'TextArea',
    defaultValue: 'print("欢迎使用青舒计的PY控件\\n本控件使用waddle制作")',

})

types['properties'].push({
    key: 'cssStyle',
    label: 'CSS样式',
    valueType: 'string',
    editorType: 'TextArea',
    defaultValue: "width: 100%; \nheight: 100%; ",

})

exports.types = types;
exports.widget = Widget;
