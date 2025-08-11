/**
 * @author: cym919 (chage to CoCo Widget)
 * @author: https://uiverse.io/profile/kennyotsu
 * 原链接: https://uiverse.io/kennyotsu/fresh-lizard-20
 */

// 允许访问window方法
window = this.window;
document = this.document;

const types = {
    type: 'CYM919_UIVERSE_TEXT_CHANGE_LOADER',
    icon: 'https://static.codemao.cn/pickduck/Sy0gRVZi1x.svg?hash=FkE5JSkpnVMOR251PE2hkm7J6oH6',
    title: '文字切换加载器',
    platforms: ['web', 'android', 'ios'],
    isInvisibleWidget: false,
    isGlobalWidget: false,
    builtIns: {
        size: {
            width: 200,
            height: 100
        }
    },
    properties: [
        {
            key: 'loadingText',
            label: '加载文本',
            valueType:'string',
            defaultValue: 'loading'
        },
        {
            key: 'words',
            label: '滚动词语',
            valueType:'string',
            defaultValue: 'buttons,forms,switches,cards,buttons'
        },
        {
            key: 'loaderColor',
            label: '加载文本颜色',
            valueType: 'color',
            defaultValue: 'rgb(124, 124, 124)'
        },
        {
            key: 'wordColor',
            label: '滚动词语颜色',
            valueType: 'color',
            defaultValue: '#956afa'
        },
        {
            key: 'fontSize',
            label: '字体大小',
            valueType: 'number',
            defaultValue: 25
        },
        {
            key: 'fontLink',
            label: '字体链接',
            valueType:'string',
            defaultValue: 'https://static.codemao.cn/pickduck/HJkgJr-sJe.ttf?hash=FkCqYlzqUamFMZuzWpMH0kegn3Ca'
        },
        {
            key: 'fontFamily',
            label: '字体名称',
            valueType:'string',
            defaultValue: 'Poppins, sans-serif'
        },
        {
            key: 'bgColor',
            label: '背景颜色',
            valueType: 'color',
            defaultValue: '#212121'
        },
        {
            key: 'borderRadius',
            label: '圆角',
            valueType: 'number',
            defaultValue: 16
        }
    ],
    methods: [],
    events: []
};

class LoaderWidget extends VisibleWidget {
    constructor(props) {
        super(props);
        this.loadingText = props.loadingText;
        this.words = props.words.split(',');
        this.loaderColor = props.loaderColor;
        this.wordColor = props.wordColor;
        this.fontSize = props.fontSize;
        this.fontLink = props.fontLink;
        this.fontFamily = props.fontFamily;
        this.bgColor = props.bgColor;
        this.borderRadius = props.borderRadius;

        // 动态添加字体链接
        try {
            // 动态添加字体链接
            const link = document.createElement('link');
            link.href = this.fontLink;
            link.rel = 'stylesheet';
            document.head.appendChild(link);
        } catch (error) {
            console.error('添加字体链接时出错:', error);
        }
    }

    render() {
        return (
            <div className="card" style={{
                '--bg-color': this.bgColor,
                backgroundColor: 'var(--bg-color)',
                padding: '1rem 2rem',
                borderRadius: `${this.borderRadius}px`
            }}>
                <div className="loader" style={{
                    color: this.loaderColor,
                    fontFamily: this.fontFamily,
                    fontWeight: 500,
                    fontSize: `${this.fontSize}px`,
                    boxSizing: 'content-box',
                    height: '40px',
                    padding: '10px 10px',
                    display: 'flex',
                    borderRadius: '8px'
                }}>
                    <p>{this.loadingText}</p>
                    <div className="words" style={{
                        overflow: 'hidden',
                        position: 'relative'
                    }}>
                        {this.words.map((word, index) => (
                            <span key={index} className="word" style={{
                                display: 'block',
                                height: '100%',
                                paddingLeft: '6px',
                                color: this.wordColor,
                                animation:'spin_4991 4s infinite'
                            }}>{word}</span>
                        ))}
                    </div>
                </div>
                <style jsx>{`
                    @keyframes spin_4991 {
                        10% {
                            -webkit-transform: translateY(-102%);
                            transform: translateY(-102%);
                        }
                        25% {
                            -webkit-transform: translateY(-100%);
                            transform: translateY(-100%);
                        }
                        35% {
                            -webkit-transform: translateY(-202%);
                            transform: translateY(-202%);
                        }
                        50% {
                            -webkit-transform: translateY(-200%);
                            transform: translateY(-200%);
                        }
                        60% {
                            -webkit-transform: translateY(-302%);
                            transform: translateY(-302%);
                        }
                        75% {
                            -webkit-transform: translateY(-300%);
                            transform: translateY(-300%);
                        }
                        85% {
                            -webkit-transform: translateY(-402%);
                            transform: translateY(-402%);
                        }
                        100% {
                            -webkit-transform: translateY(-400%);
                            transform: translateY(-400%);
                        }
                    }
                `}</style>
            </div>
        );
    }
}

exports.types = types;
exports.widget = LoaderWidget;