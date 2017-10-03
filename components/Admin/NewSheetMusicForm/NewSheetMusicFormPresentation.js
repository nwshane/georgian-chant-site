// @flow
import React from 'react'
import SheetMusicInput from './SheetMusicInput'
import RaisedButton from 'material-ui/RaisedButton'
import { Form } from 'formsy-react'
import SelectChantSchool from '~/components/Admin/shared/SelectChantSchool'

type Props = {
  handleSubmit: Function,
  handleChangeFile: Function,
  selectedFile: ?{
    name: string
  }
}

const getSelectFileLabel = (selectedFile) => (
  selectedFile
    ? 'Select New File'
    : 'Select File'
)

const getUploadButtonLabel = (selectedFile) => (
  selectedFile
    ? `Upload Sheet Music File: ${selectedFile.name}`
    : 'Upload Sheet Music File'
)

const NewSheetMusicFormPresentation = (props: Props) => (
  <Form
    onSubmit={props.handleSubmit}
    encType='multipart/form-data'
  >
    <SheetMusicInput
      label={getSelectFileLabel(props.selectedFile)}
      handleChangeFile={props.handleChangeFile}
    />
    <div>
      <SelectChantSchool
        disabled={!props.selectedFile}
      />
    </div>
    <div>
      <RaisedButton
        label={getUploadButtonLabel(props.selectedFile)}
        type='submit'
        disabled={!props.selectedFile}
        style={{
          marginTop: '20px'
        }}
        labelStyle={{
          textTransform: 'initial'
        }}
      />
    </div>
  </Form>
)

export default NewSheetMusicFormPresentation
