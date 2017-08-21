// @flow
import { combineReducers } from 'redux'
import currentUser from './ducks/currentUser'
import chants from './ducks/chants'
import appMessage from './ducks/appMessage'
import recordings from './ducks/recordings'
import schools from './ducks/schools'
import filters from './ducks/filters'

export default combineReducers({
  currentUser,
  chants,
  appMessage,
  recordings,
  schools,
  filters
})
