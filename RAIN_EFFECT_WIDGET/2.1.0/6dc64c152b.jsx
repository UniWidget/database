// rain-effect.jsx

/**
 * @author: [你的名字]
 * 全局雨滴特效控件
 * 文档: https://example.com/docs/rain-effect
 */

// 控件类型定义
const types = {
  title: "全局雨滴特效",
  type: 'RAIN_EFFECT_WIDGET',
  icon: 'https://cdn-icons-png.flaticon.com/512/414/414927.png',
  isInvisibleWidget: true,
  isGlobalWidget: true,
  docs: { url: 'https://example.com/docs/rain-effect' },
  version: "2.1.0",
  properties: [
    {
      key: 'rainCount',
      label: '雨滴数量',
      valueType: 'number',
      defaultValue: 150,
      min: 50,
      max: 500,
      description: '屏幕上同时显示的雨滴数量'
    },
    {
      key: 'rainSpeed',
      label: '雨滴速度',
      valueType: 'number',
      defaultValue: 2.5,
      min: 0.5,
      max: 5,
      description: '雨滴下落的速度'
    },
    {
      key: 'rainLength',
      label: '雨滴长度',
      valueType: 'number',
      defaultValue: 60,
      min: 20,
      max: 120,
      description: '雨滴的长度（像素）'
    },
    {
      key: 'rainColor',
      label: '雨滴颜色',
      valueType: 'color',
      defaultValue: '#8AF',
      description: '雨滴的渐变颜色'
    },
    {
      key: 'showShadow',
      label: '显示阴影',
      valueType: 'boolean',
      defaultValue: true,
      description: '是否显示雨滴的光晕效果'
    },
    {
      key: 'isRaining',
      label: '是否下雨',
      valueType: 'boolean',
      defaultValue: true,
      description: '控制下雨动画的播放状态'
    }
  ],
  methods: [
    {
      key: 'startRain',
      label: '开始下雨',
      params: [],
      description: '启动下雨动画效果'
    },
    {
      key: 'stopRain',
      label: '停止下雨',
      params: [],
      description: '暂停下雨动画效果'
    },
    {
      key: 'setRainCount',
      label: '设置雨滴数量',
      params: [
        {
          key: 'count',
          label: '数量',
          valueType: 'number',
          defaultValue: 100,
          description: '要设置的雨滴数量'
        }
      ],
      description: '动态调整雨滴数量'
    },
    {
      key: 'setRainSpeed',
      label: '设置雨滴速度',
      params: [
        {
          key: 'speed',
          label: '速度',
          valueType: 'number',
          defaultValue: 2.5,
          description: '要设置的雨滴速度'
        }
      ],
      description: '动态调整雨滴下落速度'
    }
  ],
  events: [
    {
      key: 'onRainStarted',
      label: '下雨开始',
      params: [],
      description: '当下雨动画开始时触发'
    },
    {
      key: 'onRainStopped',
      label: '下雨停止',
      params: [],
      description: '当下雨动画停止时触发'
    }
  ]
};

// 全局雨滴特效控件实体
class RainEffectWidget extends VisibleWidget {
  constructor(props) {
    super(props);
    
    // 将属性直接挂载到实例
    Object.assign(this, props);
    
    // 初始化状态
    this.state = {
      drops: this.generateDrops(this.rainCount || 150)
    };
    
    this.containerRef = null;
  }
  
  // 生成雨滴数据
  generateDrops(count) {
    const drops = [];
    for (let i = 0; i < count; i++) {
      drops.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 3,
        speed: Math.random() * 0.4 + 0.6
      });
    }
    return drops;
  }
  
  // 开始下雨
  startRain = () => {
    this.setProps({ isRaining: true });
    this.emit('onRainStarted');
    
    // 确保容器已添加到页面
    if (!this.containerRef) {
      this.renderToBody();
    }
  };
  
  // 停止下雨
  stopRain = () => {
    this.setProps({ isRaining: false });
    this.emit('onRainStopped');
  };
  
  // 设置雨滴数量
  setRainCount = (count) => {
    const newCount = Math.max(50, Math.min(500, count));
    this.setProps({ rainCount: newCount });
    this.setState({ drops: this.generateDrops(newCount) });
  };
  
  // 设置雨滴速度
  setRainSpeed = (speed) => {
    const newSpeed = Math.max(0.5, Math.min(5, speed));
    this.setProps({ rainSpeed: newSpeed });
  };
  
  // 渲染到页面body
  renderToBody() {
    // 如果容器已存在，先移除
    if (this.containerRef) {
      this.containerRef.remove();
    }
    
    // 创建容器
    this.containerRef = document.createElement('div');
    this.containerRef.id = 'global-rain-container';
    this.containerRef.style.position = 'fixed';
    this.containerRef.style.top = '0';
    this.containerRef.style.left = '0';
    this.containerRef.style.width = '100%';
    this.containerRef.style.height = '100%';
    this.containerRef.style.pointerEvents = 'none';
    this.containerRef.style.zIndex = '9999';
    this.containerRef.style.overflow = 'hidden';
    
    // 添加样式
    const style = document.createElement('style');
    style.textContent = `
      .raindrop {
        position: absolute;
        width: 2px;
        top: -60px;
        z-index: 10;
        pointer-events: none;
      }
      
      @keyframes fall {
        0% {
          transform: translateY(0);
          opacity: 0.8;
        }
        70% {
          opacity: 0.6;
        }
        100% {
          transform: translateY(100vh);
          opacity: 0.2;
        }
      }
    `;
    this.containerRef.appendChild(style);
    
    // 添加雨滴
    const rainCount = this.rainCount || 150;
    const rainSpeed = this.rainSpeed || 2.5;
    const rainLength = this.rainLength || 60;
    const rainColor = this.rainColor || '#8AF';
    const showShadow = this.showShadow !== false;
    const isRaining = this.isRaining !== false;
    
    this.state.drops.forEach((drop) => {
      const raindrop = document.createElement('div');
      raindrop.className = 'raindrop';
      raindrop.style.left = `${drop.left}%`;
      raindrop.style.height = `${rainLength}px`;
      raindrop.style.background = `linear-gradient(transparent, ${rainColor})`;
      raindrop.style.filter = showShadow ? `drop-shadow(0 0 2px ${rainColor})` : 'none';
      
      if (isRaining) {
        raindrop.style.animation = `fall ${rainSpeed * drop.speed}s linear ${drop.delay}s infinite`;
        raindrop.style.opacity = '0.8';
      } else {
        raindrop.style.opacity = '0';
      }
      
      this.containerRef.appendChild(raindrop);
    });
    
    // 添加到body
    document.body.appendChild(this.containerRef);
  }
  
  // 组件挂载时渲染
  componentDidMount() {
    if (this.isRaining !== false) {
      this.renderToBody();
    }
  }
  
  // 属性更新时重新渲染
  componentDidUpdate() {
    this.renderToBody();
  }
  
  // 组件卸载时清理
  componentWillUnmount() {
    if (this.containerRef) {
      this.containerRef.remove();
      this.containerRef = null;
    }
  }
  
  // 渲染函数 - 全局控件不需要返回JSX
  render() {
    return null;
  }
}

// 导出控件
exports.types = types;
exports.widget = RainEffectWidget;