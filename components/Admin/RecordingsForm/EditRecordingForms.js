// @flow
import { connect } from 'react-redux'
import { getRecordingsForChant } from '~/data/ducks/recordings'
import RecordingTable from '~/components/shared/RecordingTable/'

const mapStateToProps = (state, {chant: { slug }}) => ({
  recordings: getRecordingsForChant(state, slug),
  hide: ['chantName']
})

export default connect(mapStateToProps)(RecordingTable)
