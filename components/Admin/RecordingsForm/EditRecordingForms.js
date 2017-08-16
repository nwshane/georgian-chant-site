// @flow
import type { Recordings, UploadTask } from '~/data/types'
import { connect } from 'react-redux'
import { Table, TableHeader, TableBody, TableRow, TableRowColumn } from 'material-ui/Table'
import { getRecordingsForChant } from '~/data/ducks/recordings'
import map from 'lodash.map'
import UploadTaskPercentage from './UploadTaskPercentage'
import RecordingTableRow from './RecordingTableRow'

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
          School
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
        <RecordingTableRow {...{recording, key}} />
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
