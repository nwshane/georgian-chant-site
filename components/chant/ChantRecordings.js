// @flow
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
            {JSON.stringify(recording)}
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
