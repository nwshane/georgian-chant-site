// @flow
import React, { Component } from 'react'
import Layout from '~/components/Layout/'
import wrapPage from '~/components/wrappers/wrapPage'
import fetchChants from '~/data/thunks/chants/fetchAll'
import ChantList from '~/components/ChantList'
import SearchBar from '~/components/SearchBar'

type InitialPropsContext = {store: {dispatch: Function}}

class ChantIndexPage extends Component<{}> {
  static async getInitialProps ({store: {dispatch}}: InitialPropsContext) {
    await dispatch(fetchChants())
  }

  render () {
    return (
      <Layout>
        <SearchBar />
        <ChantList />
      </Layout>
    )
  }
}

export default wrapPage(ChantIndexPage)
