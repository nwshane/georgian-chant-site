// @flow
import { createStore } from 'redux'
import reducer from './reducer'
import { devToolsEnhancer } from 'redux-devtools-extension'
import type { State } from '~/data/types'

export default (initialState: State) => createStore(
  reducer,
  initialState,
  // https://github.com/zalmoxisus/redux-devtools-extension#usage
  devToolsEnhancer()
)
