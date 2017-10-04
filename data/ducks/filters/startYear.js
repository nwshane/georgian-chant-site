// @flow
import type { Action, State } from '~/data/types'
import { getFilters } from '../filters'

export const getStartYear = (state: State): number => (
  getFilters(state).startYear
)

export const setStartYear = (startYear: number): Action => ({
  type: 'SET_FILTER_START_YEAR',
  startYear
})

export default (startYearState: number = null, action: Action): number => {
  switch (action.type) {
    case 'SET_FILTER_START_YEAR':
      return action.startYear
    default:
      return startYearState
  }
}
