// @flow
import type { Chant, Chants } from '~/data/types'
import { FormattedMessage } from 'react-intl'
import ChantLink from './ChantLink'

const ChantList = ({chants} : { chants: Chants }) => (
  <div>
    <h1>
      <FormattedMessage
        id='ChantList.title'
        defaultMessage='All Chants'
      />
    </h1>
    <ul>
      {chants.map((chantObject: Chant): React$Element<*> => (
        <li key={chantObject.get('slug')}>
          <ChantLink
            chant={chantObject}
          />
        </li>
      )).toArray()}
    </ul>
  </div>
)

export default ChantList
