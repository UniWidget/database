/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */

const types = {
  isInvisibleWidget: false,
  type: "LOGIN_REGISTER_WIDGET",
  icon: "https://example.cn",
  title: "登录注册界面",
  version: "1.0.0",
  isGlobalWidget: false,
  properties: [
    {
      key: "username",
      label: "昵称",
      valueType: "string",
      defaultValue: "",
    },
    {
      key: "password",
      label: "密码",
      valueType: "string",
      defaultValue: "",
    },
  ],
  methods: [],
  events: [
    {
      key: "onLogin",
      label: "登录",
      params: [
        {
          key: "username",
          label: "昵称",
          valueType: "string",
        },
        {
          key: "password",
          label: "密码",
          valueType: "string",
        },
      ],
    },
    {
      key: "onRegister",
      label: "注册",
      params: [
        {
          key: "username",
          label: "昵称",
          valueType: "string",
        },
        {
          key: "password",
          label: "密码",
          valueType: "string",
        },
      ],
    },
  ],
};

class LoginRegisterWidget extends VisibleWidget {
  constructor(props) {
    super(props);
    this.state = {
      username: props.username,
      password: props.password,
    };
  }

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleLogin = () => {
    const { username, password } = this.state;
    this.emit("onLogin", username, password);
  };

  handleRegister = () => {
    const { username, password } = this.state;
    this.emit("onRegister", username, password);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="昵称"
          value={this.state.username}
          onChange={this.handleUsernameChange}
          style={{ padding: "10px", marginBottom: "10px" }}
        />
        <br />
        <input
          type="password"
          placeholder="密码"
          value={this.state.password}
          onChange={this.handlePasswordChange}
          style={{ padding: "10px", marginBottom: "10px" }}
        />
        <br />
        <button onClick={this.handleLogin} style={{ padding: "10px 20px", background: "#007bff", color: "#fff", border: "none", cursor: "pointer" }}>
          登录
        </button>{" "}
        <button onClick={this.handleRegister} style={{ padding: "10px 20px", background: "#28a745", color: "#fff", border: "none", cursor: "pointer" }}>
          注册
        </button>
      </div>
    );
  }
}

exports.types = types;
exports.widget = LoginRegisterWidget;
