// @flow
import React from 'react'
import Layout from '~/components/Layout/'
import wrapPage from '~/components/wrappers/wrapPage'
import LocalizedLink from '~/components/LocalizedLink'
import LoggedInAsMessage from '~/components/Admin/LoggedInAsMessage'

// TODO: Localize
const AdminIndexPage = () => (
  <Layout>
    <h1>Admin Panel</h1>
    <LoggedInAsMessage />
    <ul>
      <li>
        <LocalizedLink
          href='/admin/chants'
        >
          <a>
            Manage Chants
          </a>
        </LocalizedLink>
      </li>
      <li>
        <LocalizedLink
          href='/admin/choirs'
        >
          <a>
            Manage Choirs
          </a>
        </LocalizedLink>
      </li>
      <li>
        <LocalizedLink
          href='/admin/schools'
        >
          <a>
            Manage Chant Schools
          </a>
        </LocalizedLink>
      </li>
    </ul>
    <style jsx>{`
      a {
        text-decoration: none;
      }
    `}</style>
  </Layout>
)

export default wrapPage(AdminIndexPage)
