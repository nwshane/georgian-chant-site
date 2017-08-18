// @flow
import React from 'react'
import { connect } from 'react-redux'
import { getRecordingsForChant } from '~/data/ducks/recordings'
import RecordingTable from '~/components/shared/RecordingTable/'

type Props = {
  recordings: {}
}

// TODO: localize
const ChantRecordings = ({recordings}: Props) => (
  !recordings
    ? null
    : (
      <section>
        <h3>
          Chant Recordings
        </h3>
        <RecordingTable hide={['actions']} {...{recordings}} />
      </section>
    )
)

const mapStateToProps = (state, {chant}) => ({
  recordings: getRecordingsForChant(state, chant.slug)
})

export default connect(mapStateToProps)(ChantRecordings)
