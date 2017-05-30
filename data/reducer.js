// @flow
import { combineReducers } from 'redux'
import currentUser from './ducks/currentUser'
import chants from './ducks/chants'
import appMessage from './ducks/appMessage'

export default combineReducers({
  currentUser,
  chants,
  appMessage
})
