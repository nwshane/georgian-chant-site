import ChantLink from './ChantLink'

const ChantList = props => {
  return (
    <ul>
      {props.chants.map(chantObject => (
        <li key={chantObject.get('id')}>
          <ChantLink
            data={chantObject}
          />
        </li>
      ))}
    </ul>
  )
}

export default ChantList
