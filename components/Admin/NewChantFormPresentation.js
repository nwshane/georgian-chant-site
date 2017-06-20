// @flow
import { Form } from 'formsy-react'
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
      floatingLabelText='Name'
      required
    />
    <RaisedButton type='submit'>
      Create New Chant
    </RaisedButton>
  </Form>
)

export default NewChantFormPresentation
