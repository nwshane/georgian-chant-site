// @flow
import React from 'react'
import map from 'lodash/map'
import { connect } from 'react-redux'
import { getRecordingsForChant } from '~/data/ducks/recordings'

type Props = {
  recordings: {}
}

// TODO: localize
const ChantRecordings = ({recordings}: Props) => (
  !recordings ? null : (
    <section>
      <h3>
        Chant Recordings
      </h3>
      <div>
        {map(recordings, (recording, key) => (
          <div key={key}>
            <audio controls src={recording.url}>
              Your browser does not support the <code>audio</code> element.
            </audio>
          </div>
        ))}
      </div>
    </section>
  )
)

const mapStateToProps = (state, {chant}) => ({
  recordings: getRecordingsForChant(state, chant.slug)
})

export default connect(mapStateToProps)(ChantRecordings)
