// @flow
import { defineMessages } from 'react-intl'

const fullLanguageNames = defineMessages({
  en: {
    id: 'languages.full.en',
    defaultMessage: 'English'
  },
  ka: {
    id: 'languages.full.ka',
    defaultMessage: 'Georgian'
  }
})

type LabelElements = {
  intl: any,
  label: string,
  locale: string,
  required: boolean
}

export default ({intl, label, locale, required}: LabelElements) => (
  `${required ? '*' : ''}${label} - ${intl.formatMessage(fullLanguageNames[locale])}`
)
