// @flow
import type { State } from '~/data/types'
import { getChoir } from '~/data/ducks/choirs'
import { getTranslatedName } from '../getters'

export const getTranslatedChoirName = (state: State, slug: string, locale: string) => (
  getTranslatedName(locale, getChoir(slug, state))
)
