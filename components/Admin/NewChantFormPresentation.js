// @flow
import Form from '~/components/presentation/Form'
import RaisedButton from 'material-ui/RaisedButton'
import ChantNameInput from './ChantNameInput'
import ChantTextInput from './ChantTextInput'

type Props = {
  handleSubmit: Function
}

// TODO: localize
const NewChantFormPresentation = (props: Props) => (
  <Form
    onSubmit={props.handleSubmit}
  >
    <ChantNameInput locale='ka' required />
    <ChantTextInput locale='ka' required />
    <ChantNameInput locale='en' />
    <ChantTextInput locale='en' />
    <RaisedButton type='submit'>
      Create New Chant
    </RaisedButton>
  </Form>
)

export default NewChantFormPresentation
