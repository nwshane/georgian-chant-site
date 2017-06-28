// @flow
import { Component } from 'react'
import Layout from '~/components/Layout/'
import wrapPage from '~/components/wrappers/wrapPage'
import LocalizedLink from '~/components/LocalizedLink'
import AdminChantsTable from '~/components/Admin/ChantsTable'
import fetchChants from '~/data/thunks/chants/fetchAll'

type InitialPropsContext = {store: {dispatch: Function}}

class AdminChantsIndexPage extends Component {
  static async getInitialProps ({store: {dispatch}}: InitialPropsContext) {
    await dispatch(fetchChants())
  }

  // TODO: Localize
  render () {
    return (
      <Layout>
        <p>
          <LocalizedLink href='/admin'>
            <a>
              Return to Admin Panel
            </a>
          </LocalizedLink>
        </p>
        <p>
          <LocalizedLink href='/admin/chants/new'>
            <a>
              Add New Chant
            </a>
          </LocalizedLink>
        </p>
        <AdminChantsTable />
      </Layout>
    )
  }
}

export default wrapPage(AdminChantsIndexPage)
