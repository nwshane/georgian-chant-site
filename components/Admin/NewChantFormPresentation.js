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
      id='input-name'
      value=''
      name='name_ka'
      title='Name'
      floatingLabelText='Chant Name'
      required
    />
    <FormsyText
      id='input-text'
      value=''
      name='text_ka'
      title='Text'
      floatingLabelText='Chant Text'
      required
    />
    <RaisedButton type='submit'>
      Create New Chant
    </RaisedButton>
  </Form>
)

export default NewChantFormPresentation
