// @flow
import { FormattedMessage } from 'react-intl'

import PageWithIntl from '~/components/PageWithIntl'
import Layout from '~/components/Layout/'

const HomePage = ({intl}) => (
  <Layout>
    <FormattedMessage id='hello' defaultMessage='Hello Georgian Chanters!' />
  </Layout>
)

export default PageWithIntl(HomePage)
