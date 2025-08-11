const types = {
    type: 'ALL_IN_ONE_WIDGET',
    title: '星辰控件测试',
    icon: 'https://example.com/icon.svg',
    isInvisibleWidget: false,
    isGlobalWidget: true,
    properties: [
        {
            key: 'cardData',
            label: '卡片数据',
            valueType: 'array',
            defaultValue: [
                {
                    image: "https://via.placeholder.com/300",
                    title: "示例卡片",
                    content: "点击查看详情",
                    footerText: "2023-08-21",
                    tab: "recommend"
                }
            ]
        }
    ],
    methods: [
        {
            key: 'refreshData',
            valueType: 'void',
            params: [],
            tooltip: '强制刷新数据展示'
        }
    ],
    events: [
        {
            key: 'tabChange',
            label: '选项卡切换事件'
        },
        {
            key: 'cardSelect',
            label: '卡片选中事件'
        }
    ]
};

class Widget extends VisibleWidget {
    constructor(props) {
        super(props);
        
        // 动态注入CSS样式
        const style = document.createElement('style');
        style.textContent = `
            .all-in-one-container {
                font-family: Arial, sans-serif;
                max-width: 1200px;
                margin: 0 auto;
                padding: 20px;
            }

            /* 导航样式 */
            .nav-container {
                display: flex;
                gap: 15px;
                margin-bottom: 20px;
                border-bottom: 2px solid #e0e0e0;
                padding-bottom: 10px;
            }

            .nav-button {
                padding: 12px 24px;
                border: none;
                border-radius: 6px;
                background: #f5f5f5;
                cursor: pointer;
                transition: all 0.2s;
            }

            .nav-button.active {
                background: #2196F3;
                color: white;
                box-shadow: 0 2px 6px rgba(33,150,243,0.4);
            }

            /* 搜索框样式 */
            .search-wrapper {
                margin: 20px 0;
            }

            .search-input {
                width: 100%;
                padding: 12px 20px;
                border: 2px solid #e0e0e0;
                border-radius: 25px;
                font-size: 16px;
                transition: border-color 0.3s;
            }

            .search-input:focus {
                border-color: #2196F3;
                outline: none;
            }

            /* 卡片样式 */
            .cards-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                gap: 20px;
            }

            .card-item {
                background: white;
                border-radius: 12px;
                box-shadow: 0 3px 6px rgba(0,0,0,0.1);
                overflow: hidden;
                transition: transform 0.3s;
                cursor: pointer;
            }

            .card-item:hover {
                transform: translateY(-5px);
            }

            .card-image {
                width: 100%;
                height: 180px;
                object-fit: cover;
                border-bottom: 1px solid #eee;
            }

            .card-content {
                padding: 16px;
            }

            .card-title {
                margin: 0 0 8px;
                color: #333;
                font-size: 18px;
            }

            .card-description {
                color: #666;
                font-size: 14px;
                line-height: 1.5;
                margin-bottom: 12px;
            }

            .card-footer {
                text-align: right;
                color: #999;
                font-size: 12px;
                padding-top: 10px;
                border-top: 1px solid #eee;
            }
        `;
        document.head.appendChild(style);

        this.state = {
            activeTab: 'recommend',
            searchKeyword: '',
            filteredData: this.props.cardData
        };
    }

    // 数据过滤方法
    filterData = () => {
        return this.props.cardData.filter(item => {
            const matchTab = this.state.activeTab === 'all' || item.tab === this.state.activeTab;
            const matchSearch = item.title.includes(this.state.searchKeyword) || 
                              item.content.includes(this.state.searchKeyword);
            return matchTab && matchSearch;
        });
    }

    // 选项卡切换
    handleTabChange = (tab) => {
        this.setState({ activeTab: tab }, () => {
            this.setState({ filteredData: this.filterData() });
            this.triggerEvent('tabChange', { tab });
        });
    }

    // 搜索处理
    handleSearch = (e) => {
        this.setState({ searchKeyword: e.target.value }, () => {
            this.setState({ filteredData: this.filterData() });
        });
    }

    // 卡片点击
    handleCardClick = (card) => {
        this.triggerEvent('cardSelect', card);
    }

    render() {
        return (
            <div className="all-in-one-container">
                {/* 导航栏 */}
                <div className="nav-container">
                    {['recommend', 'myCreated', 'joined'].map(tab => (
                        <button
                            key={tab}
                            className={`nav-button ${this.state.activeTab === tab ? 'active' : ''}`}
                            onClick={() => this.handleTabChange(tab)}
                        >
                            {{
                                recommend: '推荐',
                                myCreated: '我的创作',
                                joined: '已加入'
                            }[tab]}
                        </button>
                    ))}
                </div>

                {/* 搜索框 */}
                <div className="search-wrapper">
                    <input
                        type="search"
                        className="search-input"
                        placeholder="搜索卡片..."
                        value={this.state.searchKeyword}
                        onChange={this.handleSearch}
                    />
                </div>

                {/* 卡片列表 */}
                <div className="cards-grid">
                    {this.state.filteredData.map((card, index) => (
                        <div 
                            key={index}
                            className="card-item"
                            onClick={() => this.handleCardClick(card)}
                        >
                            <img 
                                src={card.image} 
                                className="card-image"
                                alt={card.title}
                            />
                            <div className="card-content">
                                <h3 className="card-title">{card.title}</h3>
                                <p className="card-description">{card.content}</p>
                                <div className="card-footer">
                                    <span>{card.footerText}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

exports.types = types;
exports.widget = Widget;