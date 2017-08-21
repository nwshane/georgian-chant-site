// @flow
import React from 'react'
import Layout from '~/components/Layout'
import wrapPage from '~/components/wrappers/wrapPage'
import SearchBar from '~/components/SearchBar'
import SearchResults from '~/components/SearchResults'

const SearchPage = () => (
  <Layout>
    <SearchBar />
    <SearchResults />
  </Layout>
)

export default wrapPage(SearchPage)
