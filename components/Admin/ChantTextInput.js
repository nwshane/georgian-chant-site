// @flow
import React from 'react'
import { FormsyText } from 'formsy-material-ui/lib/'
import { defineMessages, injectIntl } from 'react-intl'
import getLocalizedLabelText from '~/helpers/getLocalizedLabelText'
import type { IntlShape } from 'react-intl'

type Props = {
  locale: string,
  required?: boolean,
  intl: IntlShape,
  value: string
}

const { label } = defineMessages({
  label: {
    id: 'ChantTextInput.label',
    defaultMessage: 'Chant Text'
  }
})

const ChantTextInput = ({locale, intl, ...props}: Props) => (
  <FormsyText
    id={`input-text-${locale}`}
    name={`text_${locale}`}
    title='Text'
    multiLine
    style={{width: 'initial', maxWidth: '400px'}}
    floatingLabelText={getLocalizedLabelText({
      ...props,
      locale,
      intl,
      label: intl.formatMessage(label)
    })}
    {...props}
  />
)

export default injectIntl(ChantTextInput)
