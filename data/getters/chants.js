// @flow
import type { State } from '~/data/types'
import { getChantBySlug } from '~/data/ducks/chants'
import { getTransliteratedName } from '../getters'

export const getTransliteratedChantName = (state: State, chantSlug: string, locale: string) => (
  getTransliteratedName(locale, getChantBySlug(state, chantSlug))
)
