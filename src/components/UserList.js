import React, { Component } from 'react'
import { connect } from 'react-redux'

const UserList = ({ users }) => {
  let list = users.users.map((user, i) => (
    <div key={i}>
      <h2>username: {user.username}</h2>
      <br />
      <h2>password: {user.password}</h2>
    </div>
  ))

  return (
    <div>
      <h1>hi!</h1>
      {list}
    </div>
  )
}

const mapStateToProps = state => ({
  users: state.users
})

export default connect(mapStateToProps)(UserList)
