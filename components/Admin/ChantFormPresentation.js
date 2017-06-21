// @flow
import Form from '~/components/presentation/Form'
import type { Chant } from '~/data/types'
import RaisedButton from 'material-ui/RaisedButton'
import ChantNameInput from './ChantNameInput'
import ChantTextInput from './ChantTextInput'
import { getTranslatedName, getTranslatedText } from '~/data/getters'

type Props = {
  handleSubmit: Function,
  chant?: Chant
}

// TODO: localize
const ChantFormPresentation = ({chant, handleSubmit}: Props) => (
  <Form
    onSubmit={handleSubmit}
  >
    <ChantNameInput value={getTranslatedName(chant, 'ka')} locale='ka' required />
    <ChantTextInput value={getTranslatedText(chant, 'ka')} locale='ka' required />
    <ChantNameInput value={getTranslatedName(chant, 'en')} locale='en' />
    <ChantTextInput value={getTranslatedText(chant, 'en')} locale='en' />
    <RaisedButton type='submit'>
      {chant ? 'Update Chant' : 'Create New Chant'}
    </RaisedButton>
  </Form>
)

export default ChantFormPresentation