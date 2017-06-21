// @flow
import { injectIntl } from 'react-intl'
import type { Chant } from '~/data/types'
import { getTranslatedName, getTransliteratedName } from '~/data/getters'

const ChantHeading = ({chant, intl: { locale }}: {chant: Chant, intl: any}) => (
  <h1>
    <span>
      {getTransliteratedName(chant, locale)}
      {locale !== 'ka' && ` - ${getTranslatedName(chant, locale)}`}
    </span>
  </h1>
)

export default injectIntl(ChantHeading)
