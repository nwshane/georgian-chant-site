// @flow
import React, { Component } from 'react'
import Layout from '~/components/Layout/'
import { FormattedMessage } from 'react-intl'
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
        <h1>
          <FormattedMessage
            id='ChantList.title'
            defaultMessage='All Chants'
          />
        </h1>
        <SearchBar />
        <ChantList />
      </Layout>
    )
  }
}

export default wrapPage(ChantIndexPage)
