// @flow
import { FormattedMessage } from 'react-intl'
import wrapPage from '~/components/wrappers/wrapPage'
import Layout from '~/components/Layout/'

const AboutPage = () => (
  <Layout>
    <FormattedMessage
      id='AboutPage.description'
      defaultMessage='GeorgianChant.org is an online database of Georgian Orthodox chants and related resources.'
    />
  </Layout>
)

export default wrapPage(AboutPage)
