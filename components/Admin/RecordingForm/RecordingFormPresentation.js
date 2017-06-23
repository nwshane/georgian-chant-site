// @flow
import RaisedButton from 'material-ui/RaisedButton'
import Form from '~/components/presentation/Form'
import RecordingInput from './RecordingInput'

type Props = {
  handleSubmit: Function,
  handleChangeFile: Function
}

const RecordingFormPresentation = ({handleSubmit, handleChangeFile}: Props) => (
  <Form
    onSubmit={handleSubmit}
    encType='multipart/form-data'
  >
    <h3>
      Add a Recording
    </h3>
    <RecordingInput handleChangeFile={handleChangeFile} />
    <style jsx>{`
      form {
        margin: 50px 0 30px;
      }
    `}</style>

    <RaisedButton type='submit'>
      Upload Recording
    </RaisedButton>
  </Form>
)

export default RecordingFormPresentation
