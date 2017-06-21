// @flow
import { defineMessages, injectIntl } from 'react-intl'
import { FormsyText } from 'formsy-material-ui/lib/'

type Props = {
  locale: string,
  required?: boolean,
  intl: any
}

const { label } = defineMessages({
  label: {
    id: 'ChantNameInput',
    defaultMessage: 'Chant Name'
  }
})

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

const getFloatingLabelText = ({intl, locale, required}) => (
  `${required ? '*' : ''}${intl.formatMessage(label)} - ${intl.formatMessage(fullLanguageNames[locale])}`
)

const ChantNameInput = (props: Props) => (
  <FormsyText
    id={`input-name-${props.locale}`}
    value=''
    name={`name_${props.locale}`}
    title='Name'
    floatingLabelText={getFloatingLabelText(props)}
    {...props}
  />
)

export default injectIntl(ChantNameInput)
