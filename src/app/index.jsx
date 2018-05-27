import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { Provider } from '../base/context'
import Home from './containers/Home'
import Resources from './containers/Resources'

import { store, createStore } from '../base/store'

class App extends Component {
  state = store

  isLogged = () => (
    this.state.Home.username.length > 0
  )

  render () {
    const content = this.isLogged() ? <Resources /> : <Home />
    return (
      <Provider value={createStore(this)}>
        { content }
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
