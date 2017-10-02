// @flow
import latinizeGeorgian from 'latinize-georgian'
import type { LocalizedObject } from '~/data/types'

type Nameable = {
  +name: LocalizedObject
}

export const getTranslatedName = (locale: string, nameable: ?Nameable): string => (
  (nameable && nameable.name && nameable.name[locale]) || ''
)

export const getTransliteratedName = (locale: string, nameable?: Nameable): string => (
  !nameable ? '' : locale === 'ka'
  ? nameable.name.ka
  : latinizeGeorgian(nameable.name.ka)
)

type Textable = {
  +text: LocalizedObject
}

export const getTranslatedText = (locale: string, textable: ?Textable): string => (
  (textable && textable.text && textable.text[locale]) || ''
)

export const getTransliteratedText = (locale: string, textable: Textable): string => (
  locale === 'ka'
  ? textable.text.ka
  : latinizeGeorgian(textable.text.ka)
)
