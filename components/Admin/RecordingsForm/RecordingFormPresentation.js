// @flow
import RaisedButton from 'material-ui/RaisedButton'
import Form from '~/components/presentation/Form'
import RecordingInput from './RecordingInput'

type Props = {
  handleSubmit: Function,
  handleChangeFile: Function,
  visible: boolean,
  recordingFile: ?{},
  showForm: Function
}

const getLabel = (filePresent) => (
  filePresent ? 'Choose Different File' : 'Choose File'
)
const RecordingFormPresentation = ({visible, recordingFile, showForm, handleSubmit, handleChangeFile}: Props) => (
  visible
  ? (
    <Form
      onSubmit={handleSubmit}
      encType='multipart/form-data'
    >
      <RecordingInput label={getLabel(!!recordingFile)} handleChangeFile={handleChangeFile} />
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
  ) : (
    <RaisedButton onTouchTap={showForm}>
      Add a New Recording
    </RaisedButton>
  )
)

export default RecordingFormPresentation
