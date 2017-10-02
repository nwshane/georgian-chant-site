// @flow
import React from 'react'
import type { Choirs } from '~/data/types'
import { mapObjIndexed, values } from 'ramda'
import type { IntlShape } from 'react-intl'
import ChoirLink from '~/components/ChoirLink'

type Props = {
  choirs: Choirs,
  intl: IntlShape
}

const ChoirListPresentation = ({choirs, intl: {locale}}: Props) => (
  <ul>
    {values(mapObjIndexed(
      (choir, key) => (
        <li {...{key}}>
          <ChoirLink slug={key} />
        </li>
      ),
      choirs
    ))}
  </ul>
)

export default ChoirListPresentation
