// @flow
import React, { Component } from 'react'
import wrapPage from '~/components/wrappers/wrapPage'
import Layout from '~/components/Layout/'
import fetchRecordings from '~/data/thunks/recordings/fetchAll'
import { getRecordings } from '~/data/ducks/recordings'
import RecordingTable from '~/components/shared/RecordingTable/'
import type { Recordings, Recording, State } from '~/data/types'
import {curry, compose, filter, values} from 'ramda'
import {getStartYear} from '~/data/ducks/filters/startYear'

type Props = {
  recordings: Recordings
}

const isAfterStartYear = curry((state: State, recording: Recording) => {
  const startYear = getStartYear(state)
  if (!startYear) return true
  if (!recording.year) return false
  return recording.year >= startYear
})

class RecordingsPage extends Component<Props> {
  static async getInitialProps ({store}) {
    await store.dispatch(fetchRecordings())

    const getFilteredRecordings = compose(
      filter(isAfterStartYear(store.getState())),
      values,
      getRecordings
    )

    return {
      recordings: getFilteredRecordings(store.getState())
    }
  }

  render () {
    const { recordings } = this.props
    return (
      <Layout>
        <RecordingTable hide={['actions']} {...{recordings}} />
      </Layout>
    )
  }
}

export default wrapPage(RecordingsPage)
