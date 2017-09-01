// @flow
import React from 'react'
import { injectIntl } from 'react-intl'
import type { Chant } from '~/data/types'
import { getTranslatedName, getTransliteratedName } from '~/data/getters'
import type { IntlShape } from 'react-intl'

type Props = {
  chant: Chant,
  intl: IntlShape
}

const getHeaderSuffix = (locale, chant) => (
  locale !== 'ka' && getTranslatedName(locale, chant)
    ? ` - ${getTranslatedName(locale, chant)}`
    : null
)

const ChantHeading = ({chant, intl: {locale}}: Props) => (
  <h1>
    <span>
      {getTransliteratedName(locale, chant)}
      {getHeaderSuffix(locale, chant)}
    </span>
  </h1>
)

export default injectIntl(ChantHeading)
