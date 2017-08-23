// @flow
import React from 'react'
import type { Choirs } from '~/data/types'
import { mapObjIndexed, values } from 'ramda'
import { getTransliteratedName } from '~/data/getters'
import type { IntlShape } from 'react-intl'

type Props = {
  choirs: Choirs,
  intl: IntlShape
}

const ChoirListPresentation = ({choirs, intl: {locale}}: Props) => (
  <div>
    {values(mapObjIndexed(
      (choir, key) => (
        <h1 {...{key}}>
          {getTransliteratedName(locale, choir)}
        </h1>
      ),
      choirs
    ))}
  </div>
)

export default ChoirListPresentation
