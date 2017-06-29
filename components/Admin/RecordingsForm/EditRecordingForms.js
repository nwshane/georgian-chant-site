// @flow
import type { Recordings, UploadTask } from '~/data/types'
import { connect } from 'react-redux'
import { Table, TableHeader, TableBody, TableRow, TableRowColumn } from 'material-ui/Table'
import { getRecordingsForChant } from '~/data/ducks/recordings'
import map from 'lodash.map'
import DeleteRecordingButton from './DeleteRecordingButton'
import UploadTaskRow from './UploadTaskRow'

type Props = {
  recordings: Recordings,
  uploadTasks: Array<UploadTask>,
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
      {uploadTasks.map((uploadTask) => (
        <UploadTaskRow {...{uploadTask, removeUploadTask}} />
      ))}
    </TableBody>
  </Table>
)

const mapStateToProps = (state, {chant: { slug }}) => ({
  recordings: getRecordingsForChant(state, slug)
})

export default connect(mapStateToProps)(EditRecordingForms)
