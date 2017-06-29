// @flow
import type { Recordings, UploadTask } from '~/data/types'
import { connect } from 'react-redux'
import { Table, TableHeader, TableBody, TableRow, TableRowColumn } from 'material-ui/Table'
import { getRecordingsForChant } from '~/data/ducks/recordings'
import map from 'lodash.map'
import DeleteRecordingButton from './DeleteRecordingButton'
import UploadTaskPercentage from './UploadTaskPercentage'

type Props = {
  recordings: Recordings,
  uploadTasks: {
    [string]: UploadTask
  },
  removeUploadTask: Function
}

const EditRecordingForms = ({recordings, uploadTasks, removeUploadTask}: Props) => (
  <Table>
    <TableHeader
      displaySelectAll={false}
      adjustForCheckbox={false}
    >
      <TableRow>
        <TableRowColumn>
          Recording
        </TableRowColumn>
        <TableRowColumn>
          Delete
        </TableRowColumn>
      </TableRow>
    </TableHeader>
    <TableBody
      displayRowCheckbox={false}
    >
      {map(recordings, (recording, key) => (
        <TableRow key={key}>
          <TableRowColumn>
            <audio controls src={recording.url} />
          </TableRowColumn>
          <TableRowColumn>
            <DeleteRecordingButton
              recording={recording}
              recordingId={key}
            />
          </TableRowColumn>
        </TableRow>
      ))}
      {map(uploadTasks, (uploadTask, uploadTaskKey) => (
        <TableRow key={uploadTaskKey}>
          <TableRowColumn>
            Loading New File: {
              <UploadTaskPercentage
                {...{uploadTaskKey, uploadTask, removeUploadTask}}
              />
            }
          </TableRowColumn>
          <TableRowColumn />
        </TableRow>
      ))}
    </TableBody>
  </Table>
)

const mapStateToProps = (state, {chant: { slug }}) => ({
  recordings: getRecordingsForChant(state, slug)
})

export default connect(mapStateToProps)(EditRecordingForms)
