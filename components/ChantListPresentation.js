// @flow
import React from 'react'
import type { Node } from 'react'
import type { Chant, Chants } from '~/data/types'
import ChantLink from './ChantLink'
import { mapObjIndexed, values } from 'ramda'
import ChantText from '~/components/chant/ChantText'

type Props = { chants: Chants }

const ChantList = ({chants}: Props) => (
  <div>
    <ul>
      {values(mapObjIndexed((chant: Chant, key: string): Node => (
        <li key={key}>
          <h2>
            <ChantLink
              chantSlug={key}
            />
          </h2>
          <ChantText chant={chant} />
        </li>
      ), chants))}
    </ul>
    <style jsx>{`
      h2 {
        margin: 0
      }

      ul {
        padding: 0;
      }
      
      li {
        list-style: none;
        margin: 30px 0;
      }
    `}</style>
  </div>
)

export default ChantList
