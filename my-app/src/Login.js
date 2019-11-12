import React from "react";
import axios from "axios";

/*
1. send POST api
2. if successful, save token
3. if not, show message
*/

class Login extends React.Component {
  state = {
    info: {
      username: "",
      password: ""
    },
    isLoggedIn: false
  };

  handleChange = e => {
    this.setState({
      info: {
        ...this.state.info,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    axios
      .post(
        // api link,
        this.state.info
      )
      .then(response => {
        console.log("response", response);
        const { data } = response;

        sessionStorage.setItem("token", data.payload);
        this.setState({ ...this.state, isLoggedIn: true });
      });
  };

  componentDidMount() {
    if (sessionStorage.getItem("token")) {
      this.setState({ ...this.state, isLoggedIn: true });
    } else {
      this.setState({ ...this.state, isLoggedIn: false });
    }
  }

  render() {
    return (
      <div>
        <h2>{this.state.isLoggedIn ? "LOGGED IN!" : "Please login"}</h2>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.info.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.info.password}
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;
