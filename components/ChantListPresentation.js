// @flow
import React from 'react'
import type { Node } from 'react'
import type { Chant, Chants } from '~/data/types'
import { FormattedMessage } from 'react-intl'
import ChantLink from './ChantLink'
import { mapObjIndexed, values } from 'ramda'

type Props = { chants: Chants }

const ChantList = ({chants}: Props) => (
  <div>
    <h1>
      <FormattedMessage
        id='ChantList.title'
        defaultMessage='All Chants'
      />
    </h1>
    <ul>
      {values(mapObjIndexed((chant: Chant, key: string): Node => (
        <li key={key}>
          <ChantLink
            chantSlug={key}
          />
        </li>
      ), chants))}
    </ul>
  </div>
)

export default ChantList
