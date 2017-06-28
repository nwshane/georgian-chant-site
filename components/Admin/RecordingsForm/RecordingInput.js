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
        accept='.mp3'
        className='recordingFileInput'
        onChange={handleChangeFile} />
    </span>
    {/* <audio
      src={this.getFileSrc()}
      >
      <p>Your browser does not support the audio element.</p>
    </audio> */}
    <style jsx>{`
      span :global(.recordingFileInput) {
        display: none;
      }
    `}</style>
  </RaisedButton>
)

export default RecordingInput
