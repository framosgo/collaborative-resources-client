import * as HomeActions from '../../app/containers/Home/actions'
import * as ResourcesActions from '../../app/containers/Resources/actions'

const formatActions = (selector, acctionList) => store => (
  acctionList.reduce((actions, action) => {
    actions[action.name] = payload => {
      store.setState(prevStore => ({
        [selector]: action(prevStore[selector], payload)
      }))
    }
    return actions
  }, {})
)

export const createActions = store => ({
  ...formatActions('Home', Object.values(HomeActions))(store),
  ...formatActions('Resources', Object.values(ResourcesActions))(store)
})
