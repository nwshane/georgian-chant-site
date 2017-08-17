// @flow
import React from 'react'
import Layout from '~/components/Layout/'
import LocalizedLink from '~/components/LocalizedLink'
import wrapPage from '~/components/wrappers/wrapPage'
import ChantForm from '~/components/Admin/ChantForm'

// TODO: Localize
const NewChantPage = () => (
  <Layout>
    <h1>Add New Chant</h1>
    <p>
      <LocalizedLink href='/admin/chants'>
        <a>
          View All Chants
        </a>
      </LocalizedLink>
    </p>
    <ChantForm />
  </Layout>
)

export default wrapPage(NewChantPage)
