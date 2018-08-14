import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { newPost } from '../actions/postActions'

class PostForm extends Component {
  state = {
    title: '',
    body: ''
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault()

    const post = {
      title: this.state.title,
      body: this.state.body
    }
    this.props.newPost(post)
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
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

PostForm.propTypes = {
  newPost: PropTypes.func.isRequired
}

export default connect(
  null,
  { newPost }
)(PostForm)
