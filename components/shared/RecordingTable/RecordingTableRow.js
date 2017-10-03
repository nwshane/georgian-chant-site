// @flow
import React from 'react'
import { TableRow, TableRowColumn } from 'material-ui/Table'
import { connect } from 'react-redux'
import { getTransliteratedName } from '~/data/getters'
import { getSchool } from '~/data/ducks/schools'
import type { Recording, School, Choir, State } from '~/data/types'
import { injectIntl } from 'react-intl'
import type { IntlShape } from 'react-intl'
import DeleteRecordingButton from './DeleteRecordingButton'
import ChantLink from '~/components/ChantLink'
import { getChoir } from '~/data/ducks/choirs'
import ChoirLink from '~/components/ChoirLink'

type Props = {
  hide?: Array<string>,
  recording: Recording,
  recordingKey: string,
  school: School,
  choir: Choir,
  intl: IntlShape
}

const RecordingTableRow = (props: Props) => {
  const {hide, recording, recordingKey, school, choir, intl: {locale}} = props
  return (
    <TableRow>
      {
        hide && hide.includes('chantName')
          ? null
          : (
            <TableRowColumn>
              <ChantLink chantSlug={recording.chantSlug} />
            </TableRowColumn>
          )
      }
      {
        hide && hide.includes('choir')
          ? null
          : (
            <TableRowColumn>
              {
                choir && (
                  <ChoirLink slug={choir.slug} />
                )
              }
            </TableRowColumn>
          )
      }
      <TableRowColumn>
        {getTransliteratedName(locale, school)}
      </TableRowColumn>
      <TableRowColumn>
        <audio controls src={recording.url} />
      </TableRowColumn>
      {
        hide && hide.includes('actions')
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

const mapStateToProps = (state: State, props) => ({
  school: getSchool(props.recording.school, state),
  choir: getChoir(props.recording.choir, state)
})

export default injectIntl(connect(mapStateToProps)(RecordingTableRow))
