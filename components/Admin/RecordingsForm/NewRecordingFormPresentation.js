// @flow
import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import SelectChantSchool from '~/components/Admin/shared/SelectChantSchool'
import SelectChoir from './SelectChoir'
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

const NewRecordingFormPresentation = ({recordingFile, handleSubmit, handleChangeFile}: Props) => (
  <Form
    onSubmit={handleSubmit}
    encType='multipart/form-data'
    style={{
      marginTop: '50px',
      marginBottom: '30px'
    }}
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
    {!!recordingFile && (
      <div>
        <SelectChantSchool />
        <SelectChoir />
        <RaisedButton
          label={`Upload Recording: ${recordingFile.name}`}
          type='submit'
          labelStyle={{
            textTransform: 'initial'
          }}
        />
      </div>
    )}
    <style jsx>{`
      div {
        display: flex;
        flex-direction: column;
      }
    `}</style>
  </Form>
)

export default NewRecordingFormPresentation
