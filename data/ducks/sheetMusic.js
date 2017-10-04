// @flow
import type {Action, SheetMusic, State} from '~/data/types'
import {pick} from 'ramda'
import {getChantSheetMusicIds} from '~/data/ducks/chants'

export const getSheetMusic = (state: State): SheetMusic => (
  state.sheetMusic
)

export const getSheetMusicForChant = (chantSlug: string, state: State): SheetMusic => (
  pick(
    getChantSheetMusicIds(chantSlug, state),
    getSheetMusic(state)
  )
)

export const setSheetMusic = (sheetMusic: SheetMusic): Action => ({
  type: 'SET_SHEET_MUSIC',
  sheetMusic
})

export default (state: SheetMusic = {}, action: Action) => {
  switch (action.type) {
    case 'SET_SHEET_MUSIC':
      return action.sheetMusic
    default:
      return state
  }
}
