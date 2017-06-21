// @flow
import type { LocalizedObject } from '~/data/types'

type Nameable = {
  +name: LocalizedObject
}

export const getTranslatedName = (nameable?: Nameable, locale: string): string => (
  (nameable && nameable.name && nameable.name[locale]) || ''
)

type Textable = {
  +text: LocalizedObject
}

export const getTranslatedText = (textable?: Textable, locale: string): string => (
  (textable && textable.text && textable.text[locale]) || ''
)
