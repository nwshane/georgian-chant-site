// @flow
import React from 'react'
import Layout from '~/components/Layout'
import wrapPage from '~/components/wrappers/wrapPage'
import SearchBar from '~/components/SearchBar'

const SearchPage = () => (
  <Layout>
    <SearchBar />
  </Layout>
)

export default wrapPage(SearchPage)
