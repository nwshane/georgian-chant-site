// @flow
import React, { Component } from 'react'
import Error from '~/components/Error'
import type { Chant, ServerContext } from '~/data/types'
import Layout from '~/components/Layout/'
import wrapPage from '~/components/wrappers/wrapPage'
import { getChantBySlug } from '~/data/ducks/chants'
import fetchChantBySlug from '~/data/thunks/chants/fetchBySlug'
import fetchRecordings from '~/data/thunks/recordings/fetchAll'
import ChantHeading from '~/components/chant/ChantHeading'
import ChantText from '~/components/chant/ChantText'
import ChantRecordings from '~/components/chant/ChantRecordings'

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
        <ChantHeading chant={chant} />
        <h3>Text</h3>
        <ChantText chant={chant} />
        <ChantRecordings chant={chant} />
        <style jsx>{`
          h3 {
            margin-top: 30px;
          }
        `}</style>
      </Layout>
    )
  }
}

export default wrapPage(ChantShowPage)
