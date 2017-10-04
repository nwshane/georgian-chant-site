// @flow
import React, { Component } from 'react'
import Error from '~/components/Error'
import type { Chant, ServerContext } from '~/data/types'
import Layout from '~/components/Layout/'
import wrapPage from '~/components/wrappers/wrapPage'
import { getChantBySlug } from '~/data/ducks/chants'
import fetchChantBySlug from '~/data/thunks/chants/fetchBySlug'
import fetchRecordings from '~/data/thunks/recordings/fetchAll'
import ChantLocalizedName from '~/components/chant/ChantLocalizedName'
import ChantText from '~/components/chant/ChantText'
import ChantRecordings from '~/components/chant/ChantRecordings'
import ChantSheetMusicTable from '~/components/chant/ChantSheetMusicTable'

type Props = {
  chant: ?Chant
}

class ChantShowPage extends Component<Props> {
  static async getInitialProps ({query: {slug}, store}: ServerContext) {
    await store.dispatch(fetchChantBySlug(slug))
    await store.dispatch(fetchRecordings())
    return { chant: getChantBySlug(store.getState(), slug) }
  }

  render () {
    const { chant } = this.props

    if (!chant) return <Error statusCode={404} />

    return (
      <Layout>
        <h1>
          <ChantLocalizedName chant={chant} />
        </h1>
        <ChantText chant={chant} />
        <ChantRecordings chant={chant} />
        <section>
          <h2>Sheet Music</h2>
          <ChantSheetMusicTable hide={['chant', 'actions']} chant={chant} />
        </section>
        <style jsx>{`
          h2 {
            margin-top: 40px;
          }
        `}</style>
      </Layout>
    )
  }
}

export default wrapPage(ChantShowPage)
