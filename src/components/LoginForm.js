import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: ''
    }
  }

  changeUserName(event) {
    this.setState({
      ...this.state,
      username: event.target.value
    })
  }

  changePassword(event) {
    this.setState({
      ...this.state,
      password: event.target.value
    })
  }

  submitHandler(event) {
    event.preventDefault()
    if (!this.state.username || !this.state.password) {
      return new Error ('both the username and password field are required!!')
    }
  }

  render() {
    return (
      <form onSubmit={this.submitHandler.bind(this)}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" onChange={this.changeUserName.bind(this)} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password"
            onChange={this.changePassword.bind(this)}
            value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
