// @flow
import { defineMessages, injectIntl } from 'react-intl'
import { FormsyText } from 'formsy-material-ui/lib/'
import getLocalizedLabelText from '~/helpers/getLocalizedLabelText'

type Props = {
  locale: string,
  required?: boolean,
  intl: any,
  value: string
}

const { label } = defineMessages({
  label: {
    id: 'ChantNameInput.label',
    defaultMessage: 'Chant Name'
  }
})

const ChantNameInput = ({locale, intl, ...props}: Props) => (
  <FormsyText
    id={`input-name-${locale}`}
    name={`name_${locale}`}
    title='Name'
    floatingLabelText={getLocalizedLabelText({
      ...props,
      locale,
      intl,
      label: intl.formatMessage(label)
    })}
    {...props}
  />
)

export default injectIntl(ChantNameInput)