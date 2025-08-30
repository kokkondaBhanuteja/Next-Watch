import { Component } from "react";
import { Redirect } from "react-router-dom";
import Cookies from "js-cookie";
import "./index.css";

class Login extends Component {
  
  state = {username:"", password:"", showErrMsg:false, errMsg:"", showPassword:false };
  onChangeUserName = (event) => {
    this.setState({username: event.target.value});
  }

  onChangePassword = (event) => {
    this.setState({password: event.target.value});
  }

  togglePassword = () => {
    this.setState({showPassword: !this.state.showPassword});
  }

  loginSuccess = (jwtToken) => {
    const {history} = this.props;
    Cookies.set('jwt_token', jwtToken, {
      expires:1,
    });
    history.replace("/");
  }
  
  loginFailure = (errMsg) => {
    this.setState({showErrMsg:true, errMsg});
  }

  submitFormDetails = async event =>{
    event.preventDefault();
    const {username, password} = this.state;
    const userDetails = {username, password};
    const loginUrl = "https://apis.ccbp.in/login";
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginUrl, options);
    const data = await response.json();
    console.log("The Raw Response is = ", response);
    console.log("the data is = ", data)
    if(response.ok){
      this.loginSuccess(data.jwt_token);
    } else{
      this.loginFailure(data.error_msg);
    }
  }
  render() {
    const {username, password, showErrMsg, errMsg, showPassword} = this.state;
    const jwtToken = Cookies.get('jwt_token');
    if(jwtToken){
      return <Redirect to = "/" />
    }
    return (
      <div className="login-page-container">
        <form className="login-form-container" onSubmit={this.submitFormDetails}>
          <div className="login-image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="login-image"
              className="login-image"
            />
          </div>
          {showErrMsg && <p className="login-error-message"> *{errMsg} </p>}
          <div className="login-input-container">
            <label htmlFor="login-username" className="login-form-label">
              username
            </label>
            <input
              type="text"
              value={username}
              className="login-input"
              name="login-username"
              id="login-username"
              placeholder="Username"
              onChange={this.onChangeUserName}
              required
            />
          </div>
          <div className="login-input-container">
            <label htmlFor="login-password" className="login-form-label">
              password
            </label>
            <input
              type={showPassword?"text":"password"}
              value={password}
              name="login-password"
              className="login-input"
              id="login-password"
              placeholder="Password"
              onChange={this.onChangePassword}
              required
            />
          </div>
          <div className="login-show-password-container">
            <input
              type="checkbox"
              name="show-password"
              id="show-password"
              onChange={this.togglePassword}
              checked = {showPassword}
            />
            <label htmlFor="show-password">Show Password</label>
          </div>
          <div className="login-btn-container">
            <button type="submit" className="login-btn">
              Login
            </button>
          </div>
          <p className="login-text">
            Login and explore with pre-filled credentials
          </p>
        </form>
      </div>
    );
  }
}
export default Login;
