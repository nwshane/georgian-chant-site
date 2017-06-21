// @flow
import { FormsyText } from 'formsy-material-ui/lib/'
import { defineMessages, injectIntl } from 'react-intl'
import getLocalizedLabelText from '~/helpers/getLocalizedLabelText'

type Props = {
  locale: string,
  required?: boolean,
  intl: any
}

const { label } = defineMessages({
  label: {
    id: 'ChantNameInput',
    defaultMessage: 'Chant Text'
  }
})

const ChantTextInput = (props: Props) => (
  <FormsyText
    id={`input-text-${props.locale}`}
    value=''
    name={`text_${props.locale}`}
    title='Text'
    floatingLabelText={getLocalizedLabelText({...props, label: props.intl.formatMessage(label)})}
    {...props}
  />
)

export default injectIntl(ChantTextInput)

    // <FormsyText
    //   id='input-text-georgian'
    //   value=''
    //   name='text_ka'
    //   title='Text'
    //   floatingLabelText='*Chant Text - Georgian'
    //   required
    // />
    // <FormsyText
    //   id='input-text-english'
    //   value=''
    //   name='text_en'
    //   title='Text'
    //   floatingLabelText='Chant Text - English Translation'
    // />
