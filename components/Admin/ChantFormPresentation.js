// @flow
import React from 'react'
import { Form } from 'formsy-react'
import type { Chant } from '~/data/types'
import RaisedButton from 'material-ui/RaisedButton'
import ChantNameInputWithSlug from './ChantNameInputWithSlug'
import ChantNameInput from './ChantNameInput'
import ChantTextInput from './ChantTextInput'
import { getTranslatedName, getTranslatedText } from '~/data/getters'

type Props = {
  handleSubmit: Function,
  chant: Chant
}

// TODO: localize
const ChantFormPresentation = ({chant, handleSubmit}: Props) => (
  <Form
    onSubmit={handleSubmit}
    style={{
      display: 'flex',
      flexDirection: 'column'
    }}
  >
    <ChantNameInputWithSlug chant={chant} />
    <ChantTextInput value={getTranslatedText('ka', chant)} locale='ka' required />
    <ChantNameInput value={getTranslatedName('en', chant)} locale='en' />
    <ChantTextInput value={getTranslatedText('en', chant)} locale='en' />
    <RaisedButton type='submit'>
      {chant ? 'Update Chant' : 'Create New Chant'}
    </RaisedButton>
  </Form>
)

export default ChantFormPresentation
