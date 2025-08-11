/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */

const types = {
    isInvisibleWidget: false,
    type: "SUPER_404_PAGE_WIDGET",
    icon: "https://static.codemao.cn/coco/player/unstable/S1Dtc4Q33.image/jpeg?hash=Fske55mPi_ZyPl7DuU3VydyxBjr2",
    title: "超级无敌好看的404页面",
    version: "1.0.0",
    isGlobalWidget: false,
    properties: [],
    methods: [],
    events: [
      {
        key: "onHomeButtonClick",
        label: "Home按钮点击",
        params: [],
      },
    ],
  };
  
  class Super404PageWidget extends VisibleWidget {
    constructor(props) {
      super(props);
    }
  
    handleHomeButtonClick = () => {
      this.emit("onHomeButtonClick");
    };
  
    render() {
      return (
        <div className="super-404-page">
          <style>
          {`
            .super-404-page {
              display: flex;
              align-items: center;
              justify-content: center;
              height: 100vh;
              background-color: #f7f7f7;
            }

            .content {
              text-align: center;
              background-color: #ffffff;
              padding: 40px;
              border-radius: 10px;
              box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
            }

            .title {
              font-size: 100px;
              font-weight: bold;
              color: #e74c3c;
              margin: 0;
            }

            .description {
              font-size: 24px;
              color: #333333;
              margin: 20px 0;
            }

            .home-button {
              background-color: #3498db;
              color: #ffffff;
              border: none;
              padding: 10px 20px;
              font-size: 18px;
              border-radius: 5px;
              cursor: pointer;
              transition: background-color 0.3s;
            }

            .home-button:hover {
              background-color: #2980b9;
            }
          `}
        </style>
          <div className="content">
            <h1 className="title">404</h1>
            <p className="description">Oops! The page you're looking for doesn't exist.</p>
            <button className="home-button" onClick={this.handleHomeButtonClick}>
              Back to Home
            </button>
          </div>
        </div>
      );
    }
  }
  
  exports.types = types;
  exports.widget = Super404PageWidget;
  