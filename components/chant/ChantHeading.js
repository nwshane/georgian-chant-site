// @flow
import { injectIntl } from 'react-intl'
import type { Chant } from '~/data/types'
import { getTranslatedName, getTransliteratedName } from '~/data/getters'
import type { IntlShape } from 'react-intl'

type Props = {
  chant: Chant,
  intl: IntlShape
}

const ChantHeading = ({chant, intl: {locale}}: Props) => (
  <h1>
    <span>
      {getTransliteratedName(chant, locale)}
      {locale !== 'ka' && ` - ${getTranslatedName(chant, locale)}`}
    </span>
  </h1>
)

export default injectIntl(ChantHeading)
