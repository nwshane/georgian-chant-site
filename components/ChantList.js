// @flow
import type { Map } from 'immutable'
import { FormattedMessage } from 'react-intl'
import ChantLink from './ChantLink'

const ChantList = (props : { chants: Map<string, *> }) => {
  return (
    <div>
      <h1>
        <FormattedMessage
          id='ChantList.title'
          defaultMessage='All Chants'
        />
      </h1>
      <ul>
        {props.chants.map(chantObject => (
          <li key={chantObject.get('slug')}>
            <ChantLink
              data={chantObject}
            />
          </li>
        )).toArray()}
      </ul>
    </div>
  )
}

export default ChantList
