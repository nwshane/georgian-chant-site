// @flow
import RecordingTable from '~/components/shared/RecordingTable/'
import {connect} from 'react-redux'
import {curry, compose, filter, values} from 'ramda'
import type { Recordings, Recording, State } from '~/data/types'
import {getStartYear} from '~/data/ducks/filters/startYear'

const isAfterStartYear = curry((state: State, recording: Recording) => {
  const startYear = getStartYear(state)
  if (!startYear) return true
  if (!recording.year) return false
  return recording.year >= startYear
})

type Props = {
  recordings: Recordings
}

const mapStateToProps = (state: State, {recordings, ...props}: Props) => {
  const filterRecordings = compose(
    filter(isAfterStartYear(state)),
    values
  )

  return {
    recordings: filterRecordings(recordings),
    ...props
  }
}

export default connect(mapStateToProps)(RecordingTable)
