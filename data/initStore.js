// @flow
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import type { State } from '~/data/types'

// https://github.com/zalmoxisus/redux-devtools-extension#usage
const getMiddleware = () => (
  composeWithDevTools(applyMiddleware(thunk))
)

export default (initialState: State) => createStore(
  reducer,
  initialState,
  getMiddleware()
)
