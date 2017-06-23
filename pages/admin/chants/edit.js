// @flow
import { Component } from 'react'
import Error from '~/components/Error'
import Layout from '~/components/Layout/'
import LocalizedLink from '~/components/LocalizedLink'
import wrapPage from '~/components/wrappers/wrapPage'
import type { Chant } from '~/data/types'
import { getChantBySlug } from '~/data/ducks/chants'
import fetchChantBySlug from '~/data/thunks/fetchChantBySlug'
import ChantForm from '~/components/Admin/ChantForm'
import RecordingForm from '~/components/Admin/RecordingForm/'

// TODO: Localize
class EditChantPage extends Component {
  props: {
    chant: Chant
  }

  static async getInitialProps ({store, query: {slug}}) {
    await store.dispatch(fetchChantBySlug(slug))
    return { chant: getChantBySlug(store.getState(), slug) }
  }

  render () {
    const { chant } = this.props

    if (!chant) return <Error statusCode={404} />

    return (
      <Layout>
        <p>
          <LocalizedLink href='/admin/chants'>
            <a>
              View All Chants
            </a>
          </LocalizedLink>
        </p>
        <ChantForm chant={chant} />
        <RecordingForm chant={chant} />
      </Layout>
    )
  }
}

export default wrapPage(EditChantPage)
