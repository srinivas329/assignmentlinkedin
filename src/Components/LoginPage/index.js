import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';


import './index.css'

class LoginPage extends Component {

  state = {
    username : "",
    password : "",
    errorMsg : "",
    failure : false
  }

  onSubmitSuccess = () => {
    const {history} = this.props ;
    history.replace("/Home")
  }

  onSubmitFailure = () => {
    this.setState({errorMsg : "Invalid credentials", failure: true})
  }

  onsubmitHandle = (event) => {
    event.preventDefault()
    const {username, password} = this.state
    if (username === "foo" && password === "bar"){
      this.onSubmitSuccess()
    }else{
      this.onSubmitFailure()
    }
  }

  onChangeUsername = (event) => {
    this.setState({username : event.target.value})
  }

  onChangePassword = (event) => {
    this.setState({password : event.target.value})
  }

  render(){
    const {username, password, errorMsg, failure} = this.state
    return(
      <div className="login-bg ">
        <form className="form-bg p-4" onSubmit={this.onsubmitHandle}>
        <h1 className="text-center login-heading mb-4">Login Page</h1>
        <label className="input-label" htmlFor="username">
          <b>USERNAME</b>
        </label><br/>
        <input
          type="text"
          placeholder="Enter Username"
          id="username"
          className="username-input-filed"
          value={username}
          onChange={this.onChangeUsername}
        /><br/>
        <label className="input-label" htmlFor="password">
          <b >PASSWORD</b>
        </label><br/>
        <input
          type="password"
          id="password"
          placeholder="Enter Password"
          className="password-input-filed"
          value={password}
          onChange={this.onChangePassword}
        /><br/>
        <button type="submit" className="login-button btn btn-primary w-100 mt-2">
            Login
          </button>
          {failure && <p className="error">*{errorMsg}</p>}
        </form>
        
      </div>
    )
  }
}

export default LoginPage