// @flow
import React from 'react'
import Head from 'next/head'
import { FormattedMessage } from 'react-intl'

import wrapPage from '~/components/wrappers/wrapPage'
import Layout from '~/components/Layout/'

const HomePage = ({intl}) => (
  <Layout>
    <Head>
      <title>GeorgianChant.org</title>
    </Head>
    <FormattedMessage id='hello' defaultMessage='Hello Georgian Chanters!' />
  </Layout>
)

export default wrapPage(HomePage)
