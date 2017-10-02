// @flow
import type { State } from '~/data/types'
import { getChoir } from '~/data/ducks/choirs'
import { getTransliteratedName } from '../getters'

export const getTransliteratedChoirName = (state: State, slug: string, locale: string) => (
  getTransliteratedName(locale, getChoir(state, slug))
)
