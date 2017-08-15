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
        <p>
          <b>Note:</b> The chant schools listed here cannot be changed with this content management system at the current moment. If you need to make a change, contact the web master of this project.
        </p>
        <AdminSchoolsTable />
      </Layout>
    )
  }
}

export default wrapPage(AdminSchoolsIndexPage)
