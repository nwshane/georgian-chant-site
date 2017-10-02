// @flow
import React, { Component } from 'react'
import Error from '~/components/Error'
import type { Choir, ServerContext } from '~/data/types'
import Layout from '~/components/Layout/'
import wrapPage from '~/components/wrappers/wrapPage'
import fetchChoirBySlug from '~/data/thunks/choirs/fetchChoirBySlug'
import {getTranslatedName} from '~/data/getters'
import type { IntlShape } from 'react-intl'
import {getChoir} from '~/data/ducks/choirs'

type Props = {
  choir: ?Choir,
  intl: IntlShape
}

class ChoirShowPage extends Component<Props> {
  static async getInitialProps ({query: {slug}, store}: ServerContext) {
    await store.dispatch(fetchChoirBySlug(slug))
    return { choir: getChoir(slug, store.getState()) }
  }

  render () {
    const { choir, intl: {locale} } = this.props

    if (!choir) return <Error statusCode={404} />

    return (
      <Layout>
        <h1>
          {getTranslatedName(locale, choir)}
        </h1>
        <style jsx>{`
          h3 {
            margin-top: 30px;
          }
        `}</style>
      </Layout>
    )
  }
}

export default wrapPage(ChoirShowPage)
