// @flow
import type { Chant, Chants } from '~/data/types'
import { FormattedMessage } from 'react-intl'
import ChantLink from './ChantLink'
import map from 'lodash.map'

const ChantList = ({chants} : { chants: Chants }) => (
  <div>
    <h1>
      <FormattedMessage
        id='ChantList.title'
        defaultMessage='All Chants'
      />
    </h1>
    <ul>
      {map(chants, (chant: Chant): React$Element<*> => (
        <li key={chant.slug}>
          <ChantLink
            chant={chant}
          />
        </li>
      ))}
    </ul>
  </div>
)

export default ChantList
