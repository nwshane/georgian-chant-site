import Layout from '~/components/Layout'
import ChantListContainer from '~/components/ChantListContainer'
import PageWithIntl from '~/components/PageWithIntl'

const ChantIndexPage = () => (
  <Layout>
    <ChantListContainer />
  </Layout>
)

export default PageWithIntl(ChantIndexPage)
