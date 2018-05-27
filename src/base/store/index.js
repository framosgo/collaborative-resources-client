import { Home } from '../../app/containers/Home/store'
import { Resources } from '../../app/containers/Resources/store'
import { createActions } from '../actions'

export const store = {
  Home,
  Resources,
  actions: createActions()
}

export const createStore = context => {
  const actions = createActions(context)
  return { ...context.state, actions }
}
