// @flow
import React from 'react'
import { TableRow, TableRowColumn } from 'material-ui/Table'
import { connect } from 'react-redux'
import { getTransliteratedName } from '~/data/getters'
import { getSchool } from '~/data/ducks/schools'
import type { Recording, School } from '~/data/types'
import { injectIntl } from 'react-intl'
import type { IntlShape } from 'react-intl'
import DeleteRecordingButton from './DeleteRecordingButton'
import ChantLink from '~/components/ChantLink'

type Props = {
  hide: Array<string>,
  recording: Recording,
  recordingKey: string,
  school: School,
  intl: IntlShape
}

const RecordingTableRow = (props: Props) => {
  const {hide, recording, recordingKey, school, intl: {locale}} = props
  return (
    <TableRow>
      {
        hide.includes('chantName')
          ? null
          : (
            <TableRowColumn>
              <ChantLink chantSlug={recording.chantSlug} />
            </TableRowColumn>
          )
      }
      <TableRowColumn>
        {getTransliteratedName(school, locale)}
      </TableRowColumn>
      <TableRowColumn>
        <audio controls src={recording.url} />
      </TableRowColumn>
      {
        hide.includes('actions')
          ? null
          : (
            <TableRowColumn>
              <DeleteRecordingButton
                recording={recording}
                recordingId={recordingKey}
              />
            </TableRowColumn>
          )
      }
    </TableRow>
  )
}

const mapStateToProps = (state, props) => ({
  school: getSchool(props.recording.school, state)
})

export default injectIntl(connect(mapStateToProps)(RecordingTableRow))
