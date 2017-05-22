// @flow
import type { Chant } from '~/data/types'
import Layout from '~/components/Layout/'
import PageWithIntl from '~/components/PageWithIntl'
import ChantFetcher from '~/components/ChantFetcher'

type Props = {
  url: {
    query: {
      slug: string
    }
  }
}

const maybeRenderChant = (chant : ?Chant) : ?React$Element<*> => (chant && (
  <div>
    <h1>{chant.getIn(['name', 'ka'])}</h1>
    <p>{chant.getIn(['text', 'ka'])}</p>
  </div>
))

const ChantShowPage = (props : Props) => (
  <Layout>
    <ChantFetcher id={props.url.query.slug}>
      {maybeRenderChant}
    </ChantFetcher>
  </Layout>
)

export default PageWithIntl(ChantShowPage)
