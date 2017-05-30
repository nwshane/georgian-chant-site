// @flow
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import type { State } from '~/data/types'

export default (initialState: State) => createStore(
  reducer,
  initialState,
  // https://github.com/zalmoxisus/redux-devtools-extension#usage
  composeWithDevTools(applyMiddleware(thunk))
)
