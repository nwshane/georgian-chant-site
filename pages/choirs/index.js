// @flow
import React from 'react'
import wrapPage from '~/components/wrappers/wrapPage'
import Layout from '~/components/Layout/'
import ChoirList from '~/components/ChoirList/'
import fetchChoirList from '~/data/thunks/choirs/fetchChoirList'
import type { ServerContext } from '~/data/types'

const ChoirIndexPage = () => (
  <Layout>
    <h1>Choirs</h1>
    <ChoirList />
  </Layout>
)

ChoirIndexPage.getInitialProps = async function (context: ServerContext) {
  const {store: {dispatch}} = context
  await dispatch(fetchChoirList())
}

export default wrapPage(ChoirIndexPage)
