// @flow
import React from 'react'
import { connect } from 'react-redux'
import type { Chant, State } from '~/data/types'
import { getRecordingsForChant } from '~/data/ducks/recordings'
import RecordingsTableAndFilters from '~/components/shared/RecordingsTableAndFilters'
import { values } from 'ramda'

type Props = {
  recordings: {}
}

// TODO: localize
const ChantRecordings = ({recordings}: Props) => (
  values(recordings).length === 0
    ? null
    : (
      <section>
        <h2>
          Recordings
        </h2>
        <RecordingsTableAndFilters hide={['actions', 'chantName']} {...{recordings}} />
      </section>
    )
)

const mapStateToProps = (state: State, {chant}: {chant: Chant}) => ({
  recordings: getRecordingsForChant(state, chant.slug)
})

export default connect(mapStateToProps)(ChantRecordings)
