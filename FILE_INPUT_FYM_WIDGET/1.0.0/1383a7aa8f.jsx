
/**
 * 文件选择器
 * 制作：一门鸽鸽（QQ：2422481178）
 */

const WIDGET_ICON = 'icon-toolbox-feature';
const BLOCK_COLOR = '#a073ff';
const BLOCK_ICON = '';
const AUTHER = '中子星000';
const VERSION = '1.0.1';
const QQ = 2422481178;
const NO_BLOCK = { generateBlock: false }

const types = {
    type: 'FILE_INPUT_FYM_WIDGET',
    icon: WIDGET_ICON,
    title: '文件选择器',
    version: VERSION,
    platforms: ['android', 'ios', 'web'],
    docs: {
        url: 'https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/file#attr-accept',
    },
    isInvisibleWidget: false,
    isGlobalWidget: false,
    properties: [
        { key: '__width', label: '', valueType: 'number', defaultValue: 0, readOnly: true, blockOptions: NO_BLOCK },
        { key: '__height', label: '', valueType: 'number', defaultValue: 0, readOnly: true, blockOptions: NO_BLOCK },
        { key: '__position', label: '', valueType: 'number', defaultValue: 0, readOnly: true, blockOptions: NO_BLOCK },
        { key: 'multiple', label: '文件多选', valueType: 'boolean', defaultValue: 0, },

    ],
    methods: [
        // {
        //     key: 'sync_return_choose_file', label: '选择文件 并返回', valueType: 'object',
        //     tooltip: `同步返回 选择文件，返回文件列表`,
        //     blockOptions: {
        //         icon: BLOCK_ICON,
        //         color: BLOCK_COLOR,
        //     },
        //     params: [],
        // },
        // {
        //     key: 'sync_callback_choose_file', label: '选择文件 并等待',
        //     tooltip: `同步回调 选择文件，触发事件回调`,
        //     blockOptions: {
        //         icon: BLOCK_ICON,
        //         color: BLOCK_COLOR,
        //     },
        //     params: [],
        // },
        {
            key: 'async_callback_choose_file', label: '选择文件',
            tooltip: `异步 回调 选择文件，触发事件回调`,
            blockOptions: {
                icon: BLOCK_ICON,
                color: BLOCK_COLOR,
            },
            params: [],
        },
        {
            key: 'get_attr_by_index', label: '获取', valueType: ['object', 'Date'],
            tooltip: `获取第n个文件对象，注意n是下标哟，所有第一项是0`,
            blockOptions: {
                icon: BLOCK_ICON,
                color: BLOCK_COLOR,
            },
            params: [
                { key: 'FileList', label: '文件列表', valueType: ['object', 'string'], defaultValue: '', },
                { key: 'index', label: '第', labelAfter: '个 文件', valueType: 'number', defaultValue: 0, },
                {
                    key: 'prop', label: '的', valueType: 'string', defaultValue: 'name',
                    dropdown: [
                        { label: '文件名', value: 'name' },
                        { label: '大小', value: 'size' },
                        { label: '最后修改时间戳', value: 'lastModified' },
                    ],
                },
            ],
        },
        {
            key: 'read_file_by_index', label: '读取', valueType: ['object', 'string'],
            tooltip: `以某种方式读取文件，注意n是下标哟，所有第一项是0，后两个模式暂不推荐使用`,
            blockOptions: {
                icon: BLOCK_ICON,
                color: BLOCK_COLOR,
            },
            params: [
                { key: 'FileList', label: '文件列表', valueType: ['object', 'string'], defaultValue: '', },
                { key: 'index', label: '第', labelAfter: '个 文件', valueType: 'number', defaultValue: 0, },
                {
                    key: 'method', label: '模式', valueType: 'string', defaultValue: 'readAsText',
                    dropdown: [
                        { label: '纯文本', value: 'readAsText' },
                        { label: 'DataUrl', value: 'readAsDataURL' },
                        { label: '__readAsBinaryString', value: 'readAsBinaryString' },
                        { label: '__readAsArrayBuffer', value: 'readAsArrayBuffer' },
                    ],
                },
            ],
        },
    ],
    events: [
        {
            key: 'callback_onChange', label: '选择完毕',
            tooltip: '回调，返回文件列表。使用 获取属性积木 或 工具箱控件对象相关积木 读取',
            params: [
                { key: 'file_list', label: '文件列表', valueType: 'object' }
            ],
        }
    ],
};

class Widget extends VisibleWidget {
    constructor(props) {
        super(props);

        this.__width = 0;
        this.__height = 0;
        this.__position = 0;

        this.multiple = props.multiple;
        this.id = this.__widgetId + '_input'
        this.element = undefined;
        this.files = [];

    }

    callback_onChange = (event) => {
        this.emit('callback_onChange', this.element.files);
    }

    sync_return_choose_file = async () => {
        let finish = false;
        if (!this.element) {
            this.element = document.getElementById(this.id);
        };
        this.element.onchange = () => { finish = true };
        this.element.click();
        while (!finish) { };
        this.element.onchange = undefined;
        return this.element.files;
    }

    async_callback_choose_file = () => {
        if (!this.element) {
            this.element = document.getElementById(this.id);
        };
        this.element.click();
    }

    get_attr_by_index = (FileList, index, prop) => { return FileList[index][prop]; }
    read_file_by_index = async (FileList, index, method) => {

        function readFileAsync(file, method) {
            return new Promise((resolve, reject) => {
                let reader = new FileReader();

                reader.onload = () => {
                    resolve(reader.result);
                };

                reader.onerror = reject;

                reader[method](file);
            })
        }

        async function processFile(file, method) {
            try {
                let contentBuffer = await readFileAsync(file, method);
                return contentBuffer;
            } catch (err) {
                console.error(err);
                return null;
            }
        }

        return processFile(FileList[index], method);
    }

    render() {
        return (
            <input
                onChange={this.callback_onChange}
                type='file'
                multiple={this.multiple}
                id={this.id}
                style={{
                    display: 'none',
                    width: '100%',
                    height: '100%',
                }}
            >
            </input>
        )
    }

}

exports.types = types;
exports.widget = Widget;
