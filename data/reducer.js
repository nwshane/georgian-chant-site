// @flow
import { combineReducers } from 'redux'
import currentUser from './ducks/currentUser'
import chants from './ducks/chants'
import appMessage from './ducks/appMessage'
import recordings from './ducks/recordings'
import schools from './ducks/schools'

export default combineReducers({
  currentUser,
  chants,
  appMessage,
  recordings,
  schools
})
