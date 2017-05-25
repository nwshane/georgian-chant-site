import { createStore } from 'redux'
import reducer from './reducer'
import { devToolsEnhancer } from 'redux-devtools-extension'

export default createStore(
  reducer,
  {},
  // https://github.com/zalmoxisus/redux-devtools-extension#usage
  devToolsEnhancer()
)
