import React, { Component } from 'react'

export default class PostForm extends Component {
  state = {
    title: '',
    body: ''
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form action="">
          <div>
            <label>Title: </label>
            <br />
            <input
              type="text"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>
          <br />

          <div>
            <label>Body: </label>
            <br />
            <textarea
              name="body"
              cols="30"
              rows="10"
              onChange={this.onChange}
              value={this.state.body}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
