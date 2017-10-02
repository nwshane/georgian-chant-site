// @flow
import React from 'react'
import Layout from '~/components/Layout'
import wrapPage from '~/components/wrappers/wrapPage'
import LocalizedLink from '~/components/LocalizedLink'
import AdminChoirsTable from '~/components/Admin/choirs/AdminChoirsTable'

const SchoolsPage = () => (
  <Layout>
    <p>
      <LocalizedLink href='/admin'>
        <a>
          Return to Admin Panel
        </a>
      </LocalizedLink>
    </p>
    <p>
      <LocalizedLink href='/admin/choirs/new'>
        <a>
          Add New Choir
        </a>
      </LocalizedLink>
    </p>
    <AdminChoirsTable />
  </Layout>
)

export default wrapPage(SchoolsPage)
