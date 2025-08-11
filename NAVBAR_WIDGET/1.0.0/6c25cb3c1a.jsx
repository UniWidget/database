// eslint-disable-next-line no-undef
const types = {
  type: 'NAVBAR_WIDGET',
  icon: '导航栏图标的URL',
  title: '导航栏',
  platforms: ['web'],
  isInvisibleWidget: false,
  isGlobalWidget: false,
  properties: [
    {
      key: 'list',
      label: '导航项列表',
      valueType: 'json',
      defaultValue: [],
      tooltip: '设置导航项的列表',
    },
  ],
  methods: [],
  events: [
    {
      key: 'itemClicked',
      label: '导航项被点击',
    },
  ],
};

class NavbarWidget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.state = {
      selected: '',
    };
  }

  handleClick(item) {
    this.setState({ selected: item });
    this.emitEvent('itemClicked', item);
  }

  render() {
    const { list } = this.props;
    const { selected } = this.state;

    return (
      // eslint-disable-next-line react/react-in-jsx-scope
      <div className="navbar-container">
        {list.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div
            key={index}
            className={`navbar-item${selected === item ? ' selected' : ''}`}
            onClick={() => this.handleClick(item)}
          >
            {item}
          </div>
        ))}
      </div>
    );
  }
}

exports.types = types;
exports.widget = NavbarWidget;
