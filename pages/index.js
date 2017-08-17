// @flow
import React from 'react'
import { FormattedMessage } from 'react-intl'

import wrapPage from '~/components/wrappers/wrapPage'
import Layout from '~/components/Layout/'

const HomePage = ({intl}) => (
  <Layout>
    <FormattedMessage id='hello' defaultMessage='Hello Georgian Chanters!' />
  </Layout>
)

export default wrapPage(HomePage)
