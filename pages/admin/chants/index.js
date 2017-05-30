// @flow
import { Component } from 'react'
import Layout from '~/components/Layout/'
import wrapPage from '~/components/wrappers/wrapPage'
import LocalizedLink from '~/components/LocalizedLink'
import AdminChantsTable from '~/components/Admin/ChantsTable'
import fetchChants from '~/data/thunks/fetchChants'

type InitialPropsContext = {store: {dispatch: Function}}

class AdminChantsIndexPage extends Component {
  static async getInitialProps ({store: {dispatch}}: InitialPropsContext) {
    await dispatch(fetchChants())
  }

  render () {
    return (
      <Layout>
        <LocalizedLink href='/admin'>
          <a>
            Return to Admin Panel
          </a>
        </LocalizedLink>
        <AdminChantsTable />
      </Layout>
    )
  }
}

export default wrapPage(AdminChantsIndexPage)
