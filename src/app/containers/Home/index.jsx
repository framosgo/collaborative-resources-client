import React, { Component } from 'react'

import { connectContext } from '../../../base/context'

export class Home extends Component {
  state = {
    username: this.props.Home.username
  }

  handleChange = event => {
    this.setState({
      username: event.target.value
    })
  }

  render () {
    return (
      <div>
        <input
          value={this.state.username}
          onChange={this.handleChange}
        />
        <button onClick={() => this.props.actions.login(this.state.username)}>
          Login
        </button>
      </div>
    )
  }
}

export default connectContext(Home)
