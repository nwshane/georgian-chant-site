import { defineMessages, FormattedMessage } from 'react-intl'

import PageWithIntl from '../components/PageWithIntl'
import Layout from '../components/Layout'
import Head from 'next/head'

const { description } = defineMessages({
  description: {
    id: 'description',
    defaultMessage: 'GeorgianChant.org is an online database of Georgian Orthodox chants and related resources.'
  }
})

const HomePage = ({intl}) => (
  <Layout>
    <Head>
      <meta name='description' content={intl.formatMessage(description)} />
    </Head>

    <FormattedMessage id='hello' defaultMessage='Hello Georgian Chanters!' />
  </Layout>
)

export default PageWithIntl(HomePage)
