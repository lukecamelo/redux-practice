import React, { Component } from 'react'
import { Provider } from 'react-redux'

import store from './store'

// import Posts from './components/Posts'
// import PostForm from './components/PostForm'
import UserForm from './components/UserForm'
import UserList from './components/UserList'

import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <UserForm />
          <UserList/>
        </div>
      </Provider>
    )
  }
}

export default App
