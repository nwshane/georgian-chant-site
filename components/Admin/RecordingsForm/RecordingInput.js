// @flow
import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import FileInput from 'react-file-input'

type Props = {
  handleChangeFile: Function,
  label: string
}

// TODO: localize
const RecordingInput = ({label, handleChangeFile, ...props}: Props) => (
  <RaisedButton
    containerElement='label'
    label={label}
    {...props}
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
