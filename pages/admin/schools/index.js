// @flow
import { Component } from 'react'
import Layout from '~/components/Layout/'
import wrapPage from '~/components/wrappers/wrapPage'
import LocalizedLink from '~/components/LocalizedLink'
import AdminSchoolsTable from '~/components/Admin/schools/AdminSchoolsTable'

class AdminSchoolsIndexPage extends Component {
  render () {
    return (
      <Layout>
        <LocalizedLink href='/admin'>
          <a>
            Return to Admin Panel
          </a>
        </LocalizedLink>
        <AdminSchoolsTable />
      </Layout>
    )
  }
}

export default wrapPage(AdminSchoolsIndexPage)
