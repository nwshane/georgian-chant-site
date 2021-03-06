// @flow
import React from 'react'
import { connect } from 'react-redux'
import type { Choir, State } from '~/data/types'
import { getRecordingsForChoir } from '~/data/ducks/recordings'
import RecordingsTableAndFilters from '~/components/shared/RecordingsTableAndFilters'
import { values } from 'ramda'

type Props = {
  recordings: {}
}

// TODO: localize
const ChoirRecordings = ({recordings}: Props) => (
  values(recordings).length === 0
    ? null
    : (
      <section>
        <h3>
          Recordings
        </h3>
        <RecordingsTableAndFilters hide={['actions', 'choir']} {...{recordings}} />
      </section>
    )
)

const mapStateToProps = (state: State, {choir}: {choir: Choir}) => ({
  recordings: getRecordingsForChoir(state, choir.slug)
})

export default connect(mapStateToProps)(ChoirRecordings)
