// @flow
import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import FileInput from 'react-file-input'

type Props = {
  label: string,
  handleChangeFile: Function
}

const SheetMusicInput = ({label, handleChangeFile}: Props) => (
  <RaisedButton
    containerElement='label'
    label={label}
    labelStyle={{
      textTransform: 'initial'
    }}
  >
    <span>
      <FileInput
        name='sheet-music-file'
        accept='.pdf'
        className='sheet-music-input'
        onChange={handleChangeFile}
      />
    </span>
    <style jsx>{`
      span :global(.sheet-music-input) {
        display: none;
      }
    `}</style>
  </RaisedButton>
)

export default SheetMusicInput
