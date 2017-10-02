// @flow
import React, { Component } from 'react'
import Error from '~/components/Error'
import Layout from '~/components/Layout/'
import LocalizedLink from '~/components/LocalizedLink'
import wrapPage from '~/components/wrappers/wrapPage'
import type { Choir } from '~/data/types'
import { getChoir } from '~/data/ducks/choirs'
import fetchChoirBySlug from '~/data/thunks/choirs/fetchChoirBySlug'
import ChoirLink from '~/components/ChoirLink'
import ChoirForm from '~/components/Admin/choirs/ChoirForm'

type Props = {
  choir: Choir
}

// TODO: Localize
class EditChoirPage extends Component<Props> {
  static async getInitialProps ({store, query: {slug}}) {
    await store.dispatch(fetchChoirBySlug(slug))
    return { choir: getChoir(slug, store.getState()) }
  }

  render () {
    const { choir } = this.props

    if (!choir) return <Error statusCode={404} />

    return (
      <Layout>
        <p>
          <LocalizedLink href='/admin/choirs'>
            <a>
              View All Choirs
            </a>
          </LocalizedLink>
        </p>
        <ChoirLink slug={choir.slug} text="View this choir's page" />
        <ChoirForm choir={choir} />
        {/* <RecordingsForm choir={choir} /> */}
      </Layout>
    )
  }
}

export default wrapPage(EditChoirPage)
