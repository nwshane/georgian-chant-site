// @flow
import RaisedButton from 'material-ui/RaisedButton'
import FileInput from 'react-file-input'

type Props = {
  handleChangeFile: Function
}

// TODO: localize
const RecordingInput = ({handleChangeFile}: Props) => (
  <RaisedButton
    containerElement='label'
    label='Choose Recording'
  >
    <span>
      <FileInput
        name='recording-file'
        accept='.mp3,.m4a'
        className='recordingFileInput'
        onChange={handleChangeFile} />
    </span>
    <style jsx>{`
      span :global(.recordingFileInput) {
        display: none;
      }
    `}</style>
  </RaisedButton>
)

export default RecordingInput
