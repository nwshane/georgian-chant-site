// @flow
import React from 'react'
import { injectIntl } from 'react-intl'
import type { Chant } from '~/data/types'
import nl2br from 'react-nl2br'
import type { IntlShape } from 'react-intl'

import { getTranslatedText, getTransliteratedText } from '~/data/getters'

type Props = {
  chant: Chant,
  intl: IntlShape
}

// TODO: localize
const ChantText = ({chant, intl: { locale }}: Props) => (
  <section>
    <div>
      {nl2br(getTransliteratedText(locale, chant))}
      {locale !== 'ka' && !(getTranslatedText(locale, chant).length > 0) && (
        <p>
          No translation available.
        </p>
      )}
    </div>
    {locale !== 'ka' && getTranslatedText(locale, chant).length > 0 && (
      <div>
        <h3>English Translation</h3>
        {nl2br(getTranslatedText(locale, chant))}
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
    `}</style>
  </section>
)

export default injectIntl(ChantText)
