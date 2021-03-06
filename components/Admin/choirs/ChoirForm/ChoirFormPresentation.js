// @flow
import React from 'react'
import { Form } from 'formsy-react'
import type { Choir } from '~/data/types'
import RaisedButton from 'material-ui/RaisedButton'
import ChoirNameInput from './ChoirNameInput'
import { getTranslatedName } from '~/data/getters'
import ChoirNameInputWithSlug from './ChoirNameInputWithSlug'

type Props = {
  choir: ?Choir,
  handleSubmit: Function
}
const ChoirFormPresentation = ({choir, handleSubmit}: Props) => (
  <Form
    onSubmit={handleSubmit}
    style={{
      display: 'flex',
      flexDirection: 'column'
    }}
  >
    <ChoirNameInputWithSlug choir={choir} />
    <ChoirNameInput value={getTranslatedName('en', choir)} locale='en' />
    <RaisedButton type='submit'>
      {choir ? 'Update Choir' : 'Create New Choir'}
    </RaisedButton>
  </Form>
)

export default ChoirFormPresentation
