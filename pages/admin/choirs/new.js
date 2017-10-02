// @flow
import React from 'react'
import Layout from '~/components/Layout/'
import LocalizedLink from '~/components/LocalizedLink'
import wrapPage from '~/components/wrappers/wrapPage'
import ChoirForm from '~/components/Admin/choirs/ChoirForm'

// TODO: Localize
const NewChoirPage = () => (
  <Layout>
    <h1>Add New Choir</h1>
    <p>
      <LocalizedLink href='/admin/choirs'>
        <a>
          View All Choirs
        </a>
      </LocalizedLink>
    </p>
    <ChoirForm />
  </Layout>
)

export default wrapPage(NewChoirPage)
