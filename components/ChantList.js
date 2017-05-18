import ChantListItem from './ChantListItem'

const ChantList = props => {
  return (
    <ul>
      {props.chants.map(chantObject => (
        <ChantListItem
          key={chantObject.get('id')}
          data={chantObject}
      />
    ))}
    </ul>
  )
}

export default ChantList
