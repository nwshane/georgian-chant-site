import Layout from '~/components/Layout/'
import PageWithIntl from '~/components/PageWithIntl'
import ChantFetcher from '~/components/ChantFetcher'

const ChantShowPage = props => (
  <Layout>
    <ChantFetcher id={props.url.query.slug}>
      {(chant) => (chant && (
        <div>
          <h1>{chant.getIn(['name', 'ka'])}</h1>
          <p>{chant.getIn(['text', 'ka'])}</p>
        </div>
      ))}
    </ChantFetcher>
  </Layout>
)

export default PageWithIntl(ChantShowPage)
