// @flow
import React, { Component } from 'react'
import wrapPage from '~/components/wrappers/wrapPage'
import Layout from '~/components/Layout/'
import fetchRecordings from '~/data/thunks/recordings/fetchAll'
import { getRecordings } from '~/data/ducks/recordings'
import RecordingTable from '~/components/shared/RecordingTable/'
import type { Recordings } from '~/data/types'

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
        <RecordingTable hide={['actions']} {...{recordings}} />
      </Layout>
    )
  }
}

export default wrapPage(RecordingsPage)
