// 控件类型定义
const types = {
  type: 'MOBILE_DESKTOP_SIMULATOR',
  icon: 'https://static.codemao.cn/appcraft/extension-widgets/production/desktop-icon.svg',
  title: '手机桌面模拟器',
  isInvisibleWidget: false,
  isGlobalWidget: false,
  platforms: ["web", "android", "ios"],
  version: "1.0.0",
  properties: [
    {
      key: '__width',
      label: '桌面宽度',
      valueType: 'number',
      defaultValue: 360,
      blockOptions: { generateBlock: true }
    },
    {
      key: '__height',
      label: '桌面高度',
      valueType: 'number',
      defaultValue: 640,
      blockOptions: { generateBlock: true }
    },
    {
      key: 'wallpaper',
      label: '桌面壁纸',
      valueType: 'image',
      defaultValue: ''
    },
    {
      key: 'desktops',
      label: '桌面数据',
      valueType: 'string',
      defaultValue: JSON.stringify([
        {
          apps: [
            { id: 'phone', name: '电话', icon: 'phone', x: 50, y: 100 },
            { id: 'msg', name: '信息', icon: 'msg', x: 150, y: 100 },
            { id: 'browser', name: '浏览器', icon: 'browser', x: 250, y: 100 }
          ],
          folders: []
        },
        {
          apps: [
            { id: 'camera', name: '相机', icon: 'camera', x: 50, y: 100 },
            { id: 'album', name: '相册', icon: 'album', x: 150, y: 100 }
          ],
          folders: []
        }
      ])
    },
    {
      key: 'currentDesktop',
      label: '当前桌面索引',
      valueType: 'number',
      defaultValue: 0
    },
    {
      key: 'dock',
      label: '底部Dock栏',
      valueType: 'string',
      defaultValue: JSON.stringify([
        { id: 'home', name: '主页', icon: 'home' },
        { id: 'search', name: '搜索', icon: 'search' }
      ])
    }
  ],
  methods: [
    {
      key: 'addApp',
      label: '添加应用图标',
      params: [
        { key: 'appId', label: '应用ID', valueType: 'string', defaultValue: 'newapp' },
        { key: 'name', label: '应用名称', valueType: 'string', defaultValue: '新应用' },
        { key: 'iconType', label: '图标类型', valueType: 'string', defaultValue: 'app' },
        { key: 'desktopIndex', label: '目标桌面', valueType: 'number', defaultValue: 0 },
        { key: 'x', label: 'X坐标', valueType: 'number', defaultValue: 50 },
        { key: 'y', label: 'Y坐标', valueType: 'number', defaultValue: 200 }
      ]
    },
    {
      key: 'createFolder',
      label: '创建文件夹',
      params: [
        { key: 'folderId', label: '文件夹ID', valueType: 'string', defaultValue: 'folder1' },
        { key: 'name', label: '文件夹名称', valueType: 'string', defaultValue: '文件夹' },
        { key: 'appIds', label: '包含应用ID', valueType: 'string', defaultValue: '["phone","msg"]' },
        { key: 'desktopIndex', label: '目标桌面', valueType: 'number', defaultValue: 0 },
        { key: 'x', label: 'X坐标', valueType: 'number', defaultValue: 150 },
        { key: 'y', label: 'Y坐标', valueType: 'number', defaultValue: 300 }
      ]
    },
    {
      key: 'switchDesktop',
      label: '切换桌面',
      params: [
        { key: 'index', label: '桌面索引', valueType: 'number', defaultValue: 0 }
      ]
    },
    {
      key: 'changeWallpaper',
      label: '更换壁纸',
      params: [
        { key: 'imageName', label: '壁纸图片名', valueType: 'image', defaultValue: '' }
      ]
    },
    {
      key: 'addDesktop',
      label: '新增桌面',
      params: []
    }
  ],
  events: [
    {
      key: 'onAppClick',
      label: '应用被点击时',
      params: [
        { key: 'appId', label: '应用ID', valueType: 'string' }
      ]
    },
    {
      key: 'onFolderClick',
      label: '文件夹被点击时',
      params: [
        { key: 'folderId', label: '文件夹ID', valueType: 'string' }
      ]
    },
    {
      key: 'onDesktopSwitched',
      label: '桌面切换时',
      params: [
        { key: 'currentIndex', label: '当前桌面索引', valueType: 'number' }
      ]
    },
    {
      key: 'onWallpaperChanged',
      label: '壁纸更换时',
      params: [
        { key: 'imageName', label: '壁纸图片名', valueType: 'string' }
      ]
    }
  ]
};

// 控件实体定义
class MobileDesktopWidget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.state = {
      desktops: JSON.parse(props.desktops || '[]'),
      currentDesktop: props.currentDesktop || 0,
      dock: JSON.parse(props.dock || '[]'),
      wallpaperUrl: props.wallpaper ? utils.getWidgetImageUrl(props.wallpaper) : '',
      draggingItem: null, // { type: 'app'|'folder', id: '', startPos: {x,y}, offset: {x,y} }
      isDragging: false
    };
  }

  // 组件挂载时初始化
  componentDidMount() {
    this.updatePropsToState();
  }

  // 属性更新时同步状态
  componentDidUpdate(prevProps) {
    if (prevProps.desktops !== this.props.desktops) {
      this.setState({ desktops: JSON.parse(this.props.desktops) });
    }
    if (prevProps.currentDesktop !== this.props.currentDesktop) {
      this.setState({ currentDesktop: this.props.currentDesktop }, () => {
        this.emit('onDesktopSwitched', this.state.currentDesktop);
      });
    }
    if (prevProps.wallpaper !== this.props.wallpaper) {
      const wallpaperUrl = this.props.wallpaper ? utils.getWidgetImageUrl(this.props.wallpaper) : '';
      this.setState({ wallpaperUrl }, () => {
        this.emit('onWallpaperChanged', this.props.wallpaper);
      });
    }
  }

  // 将状态同步到属性
  updatePropsToState = () => {
    this.setProps({
      desktops: JSON.stringify(this.state.desktops),
      currentDesktop: this.state.currentDesktop
    });
  };

  // 添加应用图标
  addApp = (appId, name, iconType, desktopIndex, x, y) => {
    if (desktopIndex < 0 || desktopIndex >= this.state.desktops.length) {
      this.widgetError('无效的桌面索引');
      return false;
    }

    const newApp = { id: appId, name, icon: iconType, x, y };
    const updatedDesktops = [...this.state.desktops];
    
    // 检查应用ID是否已存在
    const appExists = updatedDesktops[desktopIndex].apps.some(app => app.id === appId);
    if (appExists) {
      this.widgetWarn(`应用ID ${appId} 已存在`);
      return false;
    }

    updatedDesktops[desktopIndex].apps.push(newApp);
    this.setState({ desktops: updatedDesktops }, () => {
      this.updatePropsToState();
    });
    return true;
  };

  // 创建文件夹
  createFolder = (folderId, name, appIdsStr, desktopIndex, x, y) => {
    if (desktopIndex < 0 || desktopIndex >= this.state.desktops.length) {
      this.widgetError('无效的桌面索引');
      return false;
    }

    const appIds = JSON.parse(appIdsStr);
    const updatedDesktops = [...this.state.desktops];
    const targetDesktop = updatedDesktops[desktopIndex];

    // 检查文件夹ID是否已存在
    const folderExists = targetDesktop.folders.some(f => f.id === folderId);
    if (folderExists) {
      this.widgetWarn(`文件夹ID ${folderId} 已存在`);
      return false;
    }

    // 收集要放入文件夹的应用
    const folderApps = targetDesktop.apps.filter(app => appIds.includes(app.id));
    // 移除原桌面中的这些应用
    targetDesktop.apps = targetDesktop.apps.filter(app => !appIds.includes(app.id));

    // 创建新文件夹
    const newFolder = {
      id: folderId,
      name,
      apps: folderApps,
      x,
      y
    };
    targetDesktop.folders.push(newFolder);

    this.setState({ desktops: updatedDesktops }, () => {
      this.updatePropsToState();
      this.emit('onFolderCreated', folderId);
    });
    return true;
  };

  // 切换桌面
  switchDesktop = (index) => {
    if (index < 0 || index >= this.state.desktops.length) {
      this.widgetError('无效的桌面索引');
      return false;
    }
    this.setState({ currentDesktop: index }, () => {
      this.updatePropsToState();
      this.emit('onDesktopSwitched', index);
    });
    return true;
  };

  // 更换壁纸
  changeWallpaper = (imageName) => {
    if (!imageName) return false;
    const wallpaperUrl = utils.getWidgetImageUrl(imageName);
    this.setState({ wallpaperUrl }, () => {
      this.setProps({ wallpaper: imageName });
      this.emit('onWallpaperChanged', imageName);
    });
    return true;
  };

  // 新增桌面
  addDesktop = () => {
    const newDesktop = { apps: [], folders: [] };
    const updatedDesktops = [...this.state.desktops, newDesktop];
    this.setState({ desktops: updatedDesktops }, () => {
      this.updatePropsToState();
    });
    return updatedDesktops.length - 1; // 返回新桌面索引
  };

  // 处理拖拽开始
  handleDragStart = (type, id, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    this.setState({
      draggingItem: {
        type,
        id,
        startPos: { x: rect.left, y: rect.top },
        offset: {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        }
      },
      isDragging: true
    });
  };

  // 处理拖拽移动
  handleDragMove = (e) => {
    if (!this.state.isDragging || !this.state.draggingItem) return;

    const { type, id } = this.state.draggingItem;
    const containerRect = this.getDOMNode().getBoundingClientRect();
    const x = e.clientX - containerRect.left - this.state.draggingItem.offset.x;
    const y = e.clientY - containerRect.top - this.state.draggingItem.offset.y;

    // 更新拖拽元素位置
    const updatedDesktops = [...this.state.desktops];
    const targetDesktop = updatedDesktops[this.state.currentDesktop];

    if (type === 'app') {
      const appIndex = targetDesktop.apps.findIndex(app => app.id === id);
      if (appIndex !== -1) {
        targetDesktop.apps[appIndex].x = x;
        targetDesktop.apps[appIndex].y = y;
      }
    } else if (type === 'folder') {
      const folderIndex = targetDesktop.folders.findIndex(f => f.id === id);
      if (folderIndex !== -1) {
        targetDesktop.folders[folderIndex].x = x;
        targetDesktop.folders[folderIndex].y = y;
      }
    }

    this.setState({ desktops: updatedDesktops });
  };

  // 处理拖拽结束
  handleDragEnd = () => {
    this.setState({ isDragging: false, draggingItem: null }, () => {
      this.updatePropsToState();
    });
  };

  // 处理应用点击
  handleAppClick = (appId) => {
    this.emit('onAppClick', appId);
  };

  // 处理文件夹点击
  handleFolderClick = (folderId) => {
    this.emit('onFolderClick', folderId);
  };

  // 获取图标SVG
  getIconSvg = (type) => {
    const icons = {
      phone: `<svg width="50" height="50" viewBox="0 0 24 24" fill="white"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>`,
      msg: `<svg width="50" height="50" viewBox="0 0 24 24" fill="white"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg>`,
      browser: `<svg width="50" height="50" viewBox="0 0 24 24" fill="white"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/></svg>`,
      camera: `<svg width="50" height="50" viewBox="0 0 24 24" fill="white"><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-1.75 9c0 2.9-2.35 5.25-5.25 5.25S6.75 14.9 6.75 12 9.1 6.75 12 6.75 17.25 9.1 17.25 12z"/></svg>`,
      album: `<svg width="50" height="50" viewBox="0 0 24 24" fill="white"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>`,
      home: `<svg width="50" height="50" viewBox="0 0 24 24" fill="white"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>`,
      search: `<svg width="50" height="50" viewBox="0 0 24 24" fill="white"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>`,
      app: `<svg width="50" height="50" viewBox="0 0 24 24" fill="white"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>`
    };
    return icons[type] || icons.app;
  };

  // 渲染文件夹图标（显示前两个应用图标）
  renderFolderIcon = (folder) => {
    if (folder.apps.length === 0) {
      return this.getIconSvg('app');
    }
    // 简化处理：显示文件夹背景+第一个应用图标
    return `
      <svg width="50" height="50" viewBox="0 0 50 50">
        <rect x="5" y="15" width="40" height="35" rx="5" fill="#ffffff88"/>
        <g transform="translate(15, 20) scale(0.6)">
          ${this.getIconSvg(folder.apps[0].icon).replace('<svg', '<svg width="50" height="50"').replace('fill="white"', 'fill="#333"')}
        </g>
      </svg>
    `;
  };

  // 渲染方法
  render() {
    const currentDesktopData = this.state.desktops[this.state.currentDesktop] || { apps: [], folders: [] };
    
    return (
      <div 
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#000'
        }}
        onMouseMove={(e) => this.handleDragMove(e)}
        onMouseUp={() => this.handleDragEnd()}
        onMouseLeave={() => this.handleDragEnd()}
      >
        {/* 壁纸背景 */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: this.state.wallpaperUrl ? `url(${this.state.wallpaperUrl})` : 'linear-gradient(#1a1a2e, #16213e)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />

        {/* 桌面应用图标 */}
        {currentDesktopData.apps.map(app => (
          <div
            key={app.id}
            style={{
              position: 'absolute',
              left: app.x,
              top: app.y,
              width: 70,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
              userSelect: 'none'
            }}
            onMouseDown={(e) => this.handleDragStart('app', app.id, e)}
            onClick={() => this.handleAppClick(app.id)}
          >
            <div dangerouslySetInnerHTML={{ __html: this.getIconSvg(app.icon) }} />
            <div style={{ 
              color: 'white', 
              fontSize: 12, 
              marginTop: 5, 
              textShadow: '0 1px 2px rgba(0,0,0,0.5)',
              whiteSpace: 'nowrap'
            }}>
              {app.name}
            </div>
          </div>
        ))}

        {/* 文件夹图标 */}
        {currentDesktopData.folders.map(folder => (
          <div
            key={folder.id}
            style={{
              position: 'absolute',
              left: folder.x,
              top: folder.y,
              width: 70,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
              userSelect: 'none'
            }}
            onMouseDown={(e) => this.handleDragStart('folder', folder.id, e)}
            onClick={() => this.handleFolderClick(folder.id)}
          >
            <div dangerouslySetInnerHTML={{ __html: this.renderFolderIcon(folder) }} />
            <div style={{ 
              color: 'white', 
              fontSize: 12, 
              marginTop: 5, 
              textShadow: '0 1px 2px rgba(0,0,0,0.5)',
              whiteSpace: 'nowrap'
            }}>
              {folder.name}
            </div>
          </div>
        ))}

        {/* 底部Dock栏 */}
        <div style={{
          position: 'absolute',
          bottom: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '90%',
          height: 70,
          backgroundColor: 'rgba(255,255,255,0.1)',
          borderRadius: 15,
          backdropFilter: 'blur(10px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 20
        }}>
          {this.state.dock.map(item => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
              onClick={() => this.handleAppClick(item.id)}
            >
              <div dangerouslySetInnerHTML={{ __html: this.getIconSvg(item.icon) }} />
              <div style={{ 
                color: 'white', 
                fontSize: 10, 
                marginTop: 3,
                textShadow: '0 1px 2px rgba(0,0,0,0.5)'
              }}>
                {item.name}
              </div>
            </div>
          ))}
        </div>

        {/* 桌面切换指示器 */}
        <div style={{
          position: 'absolute',
          bottom: 100,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 8
        }}>
          {this.state.desktops.map((_, index) => (
            <div
              key={index}
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: index === this.state.currentDesktop ? 'white' : 'rgba(255,255,255,0.3)',
                cursor: 'pointer'
              }}
              onClick={() => this.switchDesktop(index)}
            />
          ))}
        </div>
      </div>
    );
  }
}

// 导出控件
exports.types = types;
exports.widget = MobileDesktopWidget;