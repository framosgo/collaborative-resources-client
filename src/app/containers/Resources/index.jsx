import React from 'react'
import { connectContext } from '../../../base/context'

const Resources = ({ Home: { username } }) => (
  <div>
    <h1>Welcome!</h1>
    <span>{`You are logged as ${username}`}</span>
  </div>
)

export default connectContext(Resources)
