// @flow
import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import SelectChantSchool from '~/components/Admin/shared/SelectChantSchool'
import SelectChoir from './SelectChoir'
import { Form } from 'formsy-react'
import RecordingInput from './RecordingInput'
import YearInput from './YearInput'

type Props = {
  handleSubmit: Function,
  handleChangeFile: Function,
  recordingFile: ?{
    name: string
  }
}

const getLabel = (filePresent) => (
  filePresent ? 'Select Different File' : 'Select File'
)

const getSubmitButtonLabel = (recordingFile) => (
  recordingFile
    ? `Upload Recording: ${recordingFile.name}`
    : 'Upload Recording'
)

const NewRecordingFormPresentation = ({recordingFile, handleSubmit, handleChangeFile}: Props) => (
  <Form
    onSubmit={handleSubmit}
    encType='multipart/form-data'
  >
    <RecordingInput
      label={getLabel(!!recordingFile)}
      handleChangeFile={handleChangeFile}
      style={{
        marginRight: '20px',
        marginBottom: '20px'
      }}
      labelStyle={{
        textTransform: 'initial'
      }}
    />
    <div>
      <SelectChantSchool disabled={!recordingFile} />
    </div>
    <div>
      <SelectChoir disabled={!recordingFile} />
    </div>
    <div>
      <YearInput disabled={!recordingFile} />
    </div>
    <div>
      <RaisedButton
        label={getSubmitButtonLabel(recordingFile)}
        type='submit'
        disabled={!recordingFile}
        labelStyle={{
          textTransform: 'initial'
        }}
      />
    </div>
  </Form>
)

export default NewRecordingFormPresentation
