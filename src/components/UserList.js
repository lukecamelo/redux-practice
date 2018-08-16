import React from 'react'
import {changeColor} from '../actions/userActions'
import { connect } from 'react-redux'

import './UserList.css'

const UserList = ({ users, changeColor, isGreen }) => {
  let list = users.map((user, i) => (
    <div className={isGreen ? 'user-item' : 'item-user'} key={i}>
      <h2>username: {user.username}</h2>
      <br />
      <h2>password: {user.password}</h2>
      <button onClick={changeColor}>Change Color</button>
    </div>
  ))

  return (
    <div>
      <h1>List of users</h1>
      {list}
    </div>
  )
}

const mapStateToProps = state => ({
  users: state.users.users,
  isGreen: state.users.isGreen
})

export default connect(mapStateToProps, { changeColor })(UserList)
