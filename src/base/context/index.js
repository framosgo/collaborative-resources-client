import React, { createContext } from 'react'

const { Provider, Consumer } = createContext()

const connectContext = Component => props => (
  <Consumer>
    { context => <Component {...context} {...props} /> }
  </Consumer>
)

export { Provider, connectContext }
