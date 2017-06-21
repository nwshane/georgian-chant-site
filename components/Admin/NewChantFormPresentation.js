// @flow
import Form from '~/components/presentation/Form'
import { FormsyText } from 'formsy-material-ui/lib/'
import RaisedButton from 'material-ui/RaisedButton'
import ChantNameInput from './ChantNameInput'

type Props = {
  handleSubmit: Function
}

// TODO: localize
const NewChantFormPresentation = (props: Props) => (
  <Form
    onSubmit={props.handleSubmit}
  >
    <ChantNameInput locale='ka' required />
    <FormsyText
      id='input-text-georgian'
      value=''
      name='text_ka'
      title='Text'
      floatingLabelText='*Chant Text - Georgian'
      required
    />
    <ChantNameInput locale='en' />
    <FormsyText
      id='input-text-english'
      value=''
      name='text_en'
      title='Text'
      floatingLabelText='Chant Text - English Translation'
    />
    <RaisedButton type='submit'>
      Create New Chant
    </RaisedButton>
  </Form>
)

export default NewChantFormPresentation
