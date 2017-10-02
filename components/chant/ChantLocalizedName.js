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

const ChantLocalizedName = ({chant, intl: {locale}}: Props) => (
  <span>
    {getTransliteratedName(locale, chant)}
    {getHeaderSuffix(locale, chant)}
  </span>
)

export default injectIntl(ChantLocalizedName)
