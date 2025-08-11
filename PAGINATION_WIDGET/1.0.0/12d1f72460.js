/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */

const types = {
  isInvisibleWidget: false,
  type: "PAGINATION_WIDGET",
  icon: "https://static.codemao.cn/coco/player/unstable/S1Dtc4Q33.image/jpeg?hash=Fske55mPi_ZyPl7DuU3VydyxBjr2",
  title: "页码显示条",
  version: "1.0.0",
  isGlobalWidget: false,
  properties: [
    {
      key: "totalPages",
      label: "总页数",
      valueType: "number",
      defaultValue: 5,
    },
    {
      key: "currentPage",
      label: "当前页",
      valueType: "number",
      defaultValue: 1,
    },
    {
      key: "visiblePages",
      label: "可见页数",
      valueType: "number",
      defaultValue: 5,
    },
    {
      key: "buttonSize",
      label: "按钮大小",
      valueType: "number",
      defaultValue: 25,
    },
    {
      key: "numberSize",
      label: "序号大小",
      valueType: "number",
      defaultValue: 15,
    },
    {
      key: "buttonColor",
      label: "选中项颜色",
      valueType: "color",
      defaultValue: "#007AFF",
    },
  ],
  methods: [],
  events: [
    {
      key: "onPageChange",
      label: "页码改变",
      params: [
        {
          key: "currentPage",
          label: "当前页",
          valueType: "number",
        },
      ],
    },
  ],
};

class PaginationWidget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.totalPages = props.totalPages;
    this.currentPage = props.currentPage;
    this.visiblePages = props.visiblePages;
    this.buttonSize = props.buttonSize;
    this.buttonColor = props.buttonColor;
    this.numberSize = props.numberSize;
  }

  handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= this.totalPages) {
      this.setProps({ currentPage: newPage });
      this.emit("onPageChange", newPage);
    }
  };

  render() {
    const pages = [];
    const startPage = Math.max(1, this.currentPage - Math.floor(this.visiblePages / 2));
    const endPage = Math.min(this.totalPages, startPage + this.visiblePages - 1);

    for (let page = startPage; page <= endPage; page++) {
      pages.push(
        <button
          key={page}
          type="button"
          className={`btn btn-secondary ${this.currentPage === page ? "active" : ""}`}
          onClick={() => this.handlePageChange(page)}
          style={{
            width: this.buttonSize + "px",
            height: this.buttonSize + "px",
            fontSize: this.numberSize + "px",
            border: "1px solid #00000020",
            color: this.currentPage === page ? "#ffffff" : "#000000",
            background: this.currentPage === page ? this.buttonColor : "#ffffff",
          }}
        >
          {page}
        </button>
      );
    }

    return (
      <div className="btn-group" role="group" aria-label="Page group">
        {pages}
      </div>
    );
  }
}

exports.types = types;
exports.widget = PaginationWidget;
