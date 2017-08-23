// @flow
import React from 'react'
import wrapPage from '~/components/wrappers/wrapPage'
import Layout from '~/components/Layout/'
import ChoirList from '~/components/ChoirList/'

const ChoirIndexPage = () => (
  <Layout>
    <h1>Choirs</h1>
    <ChoirList />
  </Layout>
)

export default wrapPage(ChoirIndexPage)
