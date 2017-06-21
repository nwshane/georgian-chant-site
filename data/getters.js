// @flow
import latinizeGeorgian from 'latinize-georgian'
import type { LocalizedObject } from '~/data/types'

type Nameable = {
  +name: LocalizedObject
}

export const getTranslatedName = (nameable?: Nameable, locale: string): string => (
  (nameable && nameable.name && nameable.name[locale]) || ''
)

export const getTransliteratedName = (nameable: Nameable, locale: string): string => (
  locale === 'ka'
  ? nameable.name.ka
  : latinizeGeorgian(nameable.name.ka)
)

type Textable = {
  +text: LocalizedObject
}

export const getTranslatedText = (textable?: Textable, locale: string): string => (
  (textable && textable.text && textable.text[locale]) || ''
)

export const getTransliteratedText = (textable: Textable, locale: string): string => (
  locale === 'ka'
  ? textable.text.ka
  : latinizeGeorgian(textable.text.ka)
)
