// @flow
import React, { Component } from 'react'
import wrapPage from '~/components/wrappers/wrapPage'
import Layout from '~/components/Layout/'
import fetchRecordings from '~/data/thunks/recordings/fetchAll'
import { getRecordings } from '~/data/ducks/recordings'
import FilteredRecordingsTable from '~/components/FilteredRecordingsTable'
import type { Recordings } from '~/data/types'
import StartYearFilter from '~/components/filters/StartYearFilter.js'

type Props = {
  recordings: Recordings
}

class RecordingsPage extends Component<Props> {
  static async getInitialProps ({store}) {
    await store.dispatch(fetchRecordings())

    return {
      recordings: getRecordings(store.getState())
    }
  }

  render () {
    const { recordings } = this.props
    return (
      <Layout>
        <StartYearFilter />
        <FilteredRecordingsTable hide={['actions']} {...{recordings}} />
      </Layout>
    )
  }
}

export default wrapPage(RecordingsPage)
