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
