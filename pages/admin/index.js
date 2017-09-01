// @flow
import React from 'react'
import Head from 'next/head'
import Layout from '~/components/Layout/'
import wrapPage from '~/components/wrappers/wrapPage'
import LocalizedLink from '~/components/LocalizedLink'

// TODO: Localize
const AdminIndexPage = () => (
  <Layout>
    <Head>
      <title>Admin Home - GeorgianChant.org</title>
    </Head>
    <h1>Admin Panel</h1>
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
