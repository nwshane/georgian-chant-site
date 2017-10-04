// @flow
import type { Action, State } from '~/data/types'
import { getFilters } from '../filters'

export const getEndYear = (state: State): number => (
  getFilters(state).endYear
)

export const setEndYear = (endYear: number): Action => ({
  type: 'SET_FILTER_END_YEAR',
  endYear
})

export default (endYearState: ?number = null, action: Action): ?number => {
  switch (action.type) {
    case 'SET_FILTER_END_YEAR':
      return action.endYear
    default:
      return endYearState
  }
}
