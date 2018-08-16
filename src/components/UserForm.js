import React from 'react'
import { newUser } from '../actions/userActions'
import { connect } from 'react-redux'

class UserForm extends React.Component {
  state = {
    username: '',
    password: ''
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault()
    const { username, password } = this.state
    const user = {
      username,
      password
    }
    this.props.newUser(user)
    this.setState({ username: '', password: '' })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>username</label>
          <input
            type="text"
            name="username"
            onChange={this.onChange}
            value={this.state.username}
          />
          <label>password</label>
          <input
            type="text"
            name="password"
            onChange={this.onChange}
            value={this.state.password}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    )
  }
}

export default connect(
  null,
  { newUser }
)(UserForm)
