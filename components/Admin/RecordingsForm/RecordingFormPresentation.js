// @flow
import RaisedButton from 'material-ui/RaisedButton'
import Form from '~/components/presentation/Form'
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
  >
    <RecordingInput
      label={getLabel(!!recordingFile)}
      handleChangeFile={handleChangeFile}
    />
    {!!recordingFile && (
      <span>
        <span>
          {recordingFile.name}
        </span>
        <RaisedButton type='submit'>
          Upload Recording
        </RaisedButton>
      </span>
    )}
    <style jsx>{`
      form {
        margin: 50px 0 30px;
      }
    `}</style>
  </Form>
)

export default RecordingFormPresentation
