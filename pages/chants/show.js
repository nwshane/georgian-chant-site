// @flow
import { Component } from 'react'
import Error from '~/components/Error'
import type { Chant } from '~/data/types'
import Layout from '~/components/Layout/'
import wrapPage from '~/components/wrappers/wrapPage'
import { getChantBySlug } from '~/data/ducks/chants'
import fetchChantBySlug from '~/data/thunks/fetchChantBySlug'
import fetchRecordings from '~/data/thunks/fetchRecordings'
import ChantShowPageContent from '~/components/ChantShowPageContent'

type InitialPropsContext = {
  query: {
    slug: string
  },
  store: {
    dispatch: Function,
    getState: Function
  }
}

type Props = {
  chant: ?Chant
}

class ChantShowPage extends Component {
  props: Props

  static async getInitialProps ({query: {slug}, store}: InitialPropsContext) {
    await store.dispatch(fetchChantBySlug(slug))
    await store.dispatch(fetchRecordings())
    return { chant: getChantBySlug(store.getState(), slug) }
  }

  render () {
    const { chant } = this.props

    if (!chant) return <Error statusCode={404} />

    return (
      <Layout>
        {chant && <ChantShowPageContent chant={chant} />}
      </Layout>
    )
  }
}

export default wrapPage(ChantShowPage)
