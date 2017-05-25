// @flow
import Layout from '~/components/Layout/'
import ChantListContainer from '~/components/ChantListContainer'
import wrapPage from '~/components/wrappers/wrapPage'

const ChantIndexPage = () => (
  <Layout>
    <ChantListContainer />
  </Layout>
)

export default wrapPage(ChantIndexPage)
