import chantJson from '../../data/chants'

export default props => {
  const chantData = chantJson.find(
    chant => chant.get('slug') === props.url.query.slug
  )
  return (
    <div>
      <h1>{chantData.getIn(['name', 'ka'])}</h1>
      <p>{chantData.getIn(['text', 'ka'])}</p>
    </div>
  )
}
