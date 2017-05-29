// @flow
import { combineReducers } from 'redux'
import currentUser from './ducks/currentUser'
import chants from './ducks/chants'

export default combineReducers({
  currentUser,
  chants
})
