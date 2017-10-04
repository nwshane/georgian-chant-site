// @flow
import { combineReducers } from 'redux'
import search from './filters/search'
import startYear from './filters/startYear'

import type { Filters, State } from '~/data/types'

export const getFilters = (state: State): Filters => (
  state.filters
)

export default combineReducers({
  search,
  startYear
})
