// @flow
import type { Recordings } from '~/data/types'
import { connect } from 'react-redux'
import { Table, TableHeader, TableBody, TableRow, TableRowColumn } from 'material-ui/Table'
import { getRecordingsForChant } from '~/data/ducks/recordings'
import map from 'lodash.map'
import DeleteRecordingButton from './DeleteRecordingButton'

type Props = {
  recordings: Recordings
}

const EditRecordingForms = ({recordings}: Props) => (
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
            <DeleteRecordingButton recording={recording} />
          </TableRowColumn>
        </TableRow>
      ))}
    </TableBody>
  </Table>
)

const mapStateToProps = (state, {chant: { slug }}) => ({
  recordings: getRecordingsForChant(state, slug)
})

export default connect(mapStateToProps)(EditRecordingForms)
