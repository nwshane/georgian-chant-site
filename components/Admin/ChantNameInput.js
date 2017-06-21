// @flow
import { defineMessages, injectIntl } from 'react-intl'
import { FormsyText } from 'formsy-material-ui/lib/'
import getLocalizedLabelText from '~/helpers/getLocalizedLabelText'

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

const ChantNameInput = (props: Props) => (
  <FormsyText
    id={`input-name-${props.locale}`}
    value=''
    name={`name_${props.locale}`}
    title='Name'
    floatingLabelText={getLocalizedLabelText({...props, label: props.intl.formatMessage(label)})}
    {...props}
  />
)

export default injectIntl(ChantNameInput)
