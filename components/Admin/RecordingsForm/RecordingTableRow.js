// @flow
import { TableRow, TableRowColumn } from 'material-ui/Table'
import { connect } from 'react-redux'
import { getTransliteratedName } from '~/data/getters'
import { getSchool } from '~/data/ducks/schools'
import type { Recording, School } from '~/data/types'
import { injectIntl } from 'react-intl'
import type { IntlShape } from 'react-intl'
import DeleteRecordingButton from './DeleteRecordingButton'

type Props = {
  recording: Recording,
  school: School,
  intl: IntlShape
}

const RecordingTableRow = ({recording, school, intl: {locale}}: Props) => (
  <TableRow>
    <TableRowColumn>
      <audio controls src={recording.url} />
    </TableRowColumn>
    <TableRowColumn>
      {getTransliteratedName(school, locale)}
    </TableRowColumn>
    <TableRowColumn>
      <DeleteRecordingButton
        recording={recording}
      />
    </TableRowColumn>
  </TableRow>
)

const mapStateToProps = (state, props) => ({
  school: getSchool(props.recording.school, state)
})

export default injectIntl(connect(mapStateToProps)(RecordingTableRow))
