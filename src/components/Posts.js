import React, { Component } from 'react'

class Posts extends Component {
  componentDidMount = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(json => console.log(json))
  }

  render() {
    return (
      <div>
        <h1>Posts</h1>
      </div>
    )
  }
}

export default Posts
