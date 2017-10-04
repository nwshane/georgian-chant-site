// @flow
import type { Action, State } from '~/data/types'
import { getFilters } from '../filters'

export const getSearch = (state: State): string => (
  getFilters(state).search
)

export const setSearch = (search: string): Action => ({
  type: 'SET_SEARCH',
  search
})

export default (searchState: string = '', action: Action): string => {
  switch (action.type) {
    case 'SET_SEARCH':
      return action.search
    default:
      return searchState
  }
}
