// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', loginErrorMsg: '', isSuccessLogin: true}

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const fetchedData = await response.json()
    console.log(fetchedData)
    console.log(response)
    if (response.ok === true) {
      this.onSubmitSuccess()
      console.log(true)
    } else {
      const errorMsg = fetchedData.error_msg
      this.setState({isSuccessLogin: false, loginErrorMsg: `${errorMsg}`})
    }
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  render() {
    const {username, password, loginErrorMsg, isSuccessLogin} = this.state
    return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-form-img"
        />

        <div className="login-form-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="login-form-logo"
          />

          <form className="login-form" onSubmit={this.onSubmitForm}>
            <label htmlFor="username" className="label-text">
              USERNAME
            </label>
            <input
              type="text"
              className="input-card"
              placeholder="Username"
              id="username"
              value={username}
              onChange={this.onChangeUserName}
            />

            <label htmlFor="password" className="label-text">
              PASSWORD
            </label>
            <input
              type="password"
              className="input-card"
              placeholder="Password"
              id="password"
              value={password}
              onChange={this.onChangePassword}
            />

            <button type="submit" className="submit-button">
              Login
            </button>
            {!isSuccessLogin && <p className="error-msg">{loginErrorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}
export default LoginForm
