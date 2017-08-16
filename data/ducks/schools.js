// @flow

import type { Action, Schools, School, State } from '~/data/types'

export const setSchools = (schools: Schools): Action => ({
  type: 'SET_SCHOOLS',
  schools
})

export const getSchools = (state: State): Schools => (
  state.schools
)

export const getSchool = (schoolName: string, state: State): School => (
  getSchools(state)[schoolName]
)

export default (schoolsState: Schools = {}, action: Action): Schools => {
  switch (action.type) {
    case 'SET_SCHOOLS':
      return action.schools
    default:
      return schoolsState
  }
}
