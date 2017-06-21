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

export default ({intl, label, locale, required}) => (
  `${required ? '*' : ''}${label} - ${intl.formatMessage(fullLanguageNames[locale])}`
)
