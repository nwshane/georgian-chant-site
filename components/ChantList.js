import ChantLink from './ChantLink'

const ChantList = props => {
  return (
    <ul>
      {props.chants.map(chantObject => (
        <li>
          <ChantLink
            key={chantObject.get('id')}
            data={chantObject}
          />
        </li>
      ))}
    </ul>
  )
}

export default ChantList
