// @flow
import { injectIntl } from 'react-intl'
import type { Chant } from '~/data/types'
import nl2br from 'react-nl2br'

import { getTranslatedText, getTransliteratedText } from '~/data/getters'

type Props = {
  chant: Chant,
  intl: {
    locale: string
  }
}

// TODO: localize
const ChantText = ({chant, intl: { locale }}: Props) => (
  <section>
    <div>
      <h3>Text</h3>
      {nl2br(getTransliteratedText(chant, locale))}
    </div>
    {locale !== 'ka' && (
      <div>
        <h3>English Translation</h3>
        {nl2br(getTranslatedText(chant, locale))}
      </div>
    )}
    <style jsx>{`
      section {
        display: flex;
        flex-direction: column;
      }

      div {
        margin-right: 25px;
      }

      @media (min-width: 600px) {
        section {
          flex-direction: row;
        }
      }

      h3 {
        margin-top: 30px;
      }
    `}</style>
  </section>
)

export default injectIntl(ChantText)
