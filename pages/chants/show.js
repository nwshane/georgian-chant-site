import chantJson from '../../data/chants'
import Layout from '../../components/Layout'
import PageWithIntl from '../../components/PageWithIntl'

export default PageWithIntl(props => {
  const chantData = chantJson.find(
    chant => chant.get('slug') === props.url.query.slug
  )
  return (
    <Layout>
      <h1>{chantData.getIn(['name', 'ka'])}</h1>
      <p>{chantData.getIn(['text', 'ka'])}</p>
    </Layout>
  )
})
