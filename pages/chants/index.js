// @flow
import { Component } from 'react'
import Layout from '~/components/Layout/'
import wrapPage from '~/components/wrappers/wrapPage'
import fetchChants from '~/data/thunks/chants/fetchAll'
import ChantListContainer from '~/components/ChantListContainer'

type InitialPropsContext = {store: {dispatch: Function}}

class ChantIndexPage extends Component {
  static async getInitialProps ({store: {dispatch}}: InitialPropsContext) {
    await dispatch(fetchChants())
  }

  render () {
    return (
      <Layout>
        <ChantListContainer />
      </Layout>
    )
  }
}

export default wrapPage(ChantIndexPage)
