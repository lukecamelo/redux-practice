import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserList extends Component {
  render() {
    let list = this.props.users.users.map(user => (
      <div>
        <h2>username: {user.username}</h2>
        <br />
        <h2>password: {user.password}</h2>
      </div>
    ))
    console.log('UserList render method, props:', this.props.users)
    return (
      <div>
        <h1>hi!</h1>
        {list}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users
})

export default connect(mapStateToProps)(UserList)
