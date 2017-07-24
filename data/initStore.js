// @flow
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import type { State } from '~/data/types'
import getNodeEnv from '~/helpers/getNodeEnv'

// https://github.com/zalmoxisus/redux-devtools-extension#usage
const getMiddleware = () => (
  getNodeEnv() === 'development'
    ? composeWithDevTools(applyMiddleware(thunk))
    : applyMiddleware(thunk)
)

export default (initialState: State) => createStore(
  reducer,
  initialState,
  getMiddleware()
)
