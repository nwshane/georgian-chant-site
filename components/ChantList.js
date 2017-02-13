import ChantListItem from './ChantListItem'

const ChantList = props => (
  <ul>
    {props.chants.map(chantObject => <ChantListItem key={chantObject.id} {...chantObject} />)}
  </ul>
)

export default ChantList
