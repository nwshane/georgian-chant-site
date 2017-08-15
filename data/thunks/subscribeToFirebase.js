// @flow

import subscribeAuthChange from './subscribeAuthChange'
import subscribeToChants from './chants/subscribe'
import subscribeToRecordings from './recordings/subscribe'
import subscribeToSchools from './schools/subscribe'

let subscribed = false

// Only subscribe once, even if this function is called multiple
// times on the client
export default () => (dispatch: Function) => {
  if (subscribed) return
  subscribed = true

  dispatch(subscribeAuthChange())
  dispatch(subscribeToChants())
  dispatch(subscribeToRecordings())
  dispatch(subscribeToSchools())
}
