// @flow
import Form from '~/components/presentation/Form'
import { FormsyText } from 'formsy-material-ui/lib/'
import RaisedButton from 'material-ui/RaisedButton'

type Props = {
  handleSubmit: Function
}

// TODO: localize
const NewChantFormPresentation = (props: Props) => (
  <Form
    onSubmit={props.handleSubmit}
  >
    <FormsyText
      id='input-name-georgian'
      value=''
      name='name_ka'
      title='Name'
      floatingLabelText='Chant Name - Georgian'
      required
    />
    <FormsyText
      id='input-text-georgian'
      value=''
      name='text_ka'
      title='Text'
      floatingLabelText='Chant Text - Georgian'
      required
    />
    <FormsyText
      id='input-name-english'
      value=''
      name='name_en'
      title='Name'
      floatingLabelText='Chant Name - English Translation'
    />
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
