// @flow
import { combineReducers } from 'redux'
import currentUser from './ducks/currentUser'
import chants from './ducks/chants'
import choirs from './ducks/choirs'
import appMessage from './ducks/appMessage'
import recordings from './ducks/recordings'
import schools from './ducks/schools'
import filters from './ducks/filters'
import sheetMusic from './ducks/sheetMusic'

export default combineReducers({
  currentUser,
  chants,
  choirs,
  appMessage,
  recordings,
  schools,
  filters,
  sheetMusic
})
