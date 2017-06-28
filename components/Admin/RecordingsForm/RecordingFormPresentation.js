// @flow
import RaisedButton from 'material-ui/RaisedButton'
import { Form } from 'formsy-react'
import RecordingInput from './RecordingInput'

type Props = {
  handleSubmit: Function,
  handleChangeFile: Function,
  recordingFile: ?{
    name: string
  }
}

const getLabel = (filePresent) => (
  filePresent ? 'Choose Different File' : 'Add a New Recording'
)

const RecordingFormPresentation = ({recordingFile, handleSubmit, handleChangeFile}: Props) => (
  <Form
    onSubmit={handleSubmit}
    encType='multipart/form-data'
    style={{
      display: 'flex',
      flexDirection: 'row'
    }}
  >
    <RecordingInput
      label={getLabel(!!recordingFile)}
      handleChangeFile={handleChangeFile}
      style={{marginRight: '20px'}}
    />
    {!!recordingFile && (
      <RaisedButton
        label={`Upload Recording: ${recordingFile.name}`}
        type='submit'
      />
    )}
    <style jsx>{`
      form {
        margin: 50px 0 30px;
      }
    `}</style>
  </Form>
)

export default RecordingFormPresentation
