// @flow
import React from 'react'
import { Form } from 'formsy-react'
import type { Choir } from '~/data/types'
import RaisedButton from 'material-ui/RaisedButton'
import ChoirNameInput from './ChoirNameInput'
import { getTranslatedName } from '~/data/getters'
import ChoirNameInputWithSlug from './ChoirNameInputWithSlug'

type Props = {
  choir: Choir,
  handleSubmit: Function
}
const ChoirFormPresentation = ({choir, handleSubmit}: Props) => (
  <Form
    onSubmit={handleSubmit}
  >
    <ChoirNameInputWithSlug choir={choir} />
    <ChoirNameInput value={getTranslatedName('en', choir)} locale='en' />
    <RaisedButton type='submit'>
      Update Choir
    </RaisedButton>
  </Form>
)

export default ChoirFormPresentation
