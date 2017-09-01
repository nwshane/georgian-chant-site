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

const showNoTranslationMessage = (locale, chant) => (
  locale !== 'ka' && !(getTranslatedText(locale, chant).length > 0)
)

const showTranslation = (locale, chant) => (
  locale !== 'ka' && getTranslatedText(locale, chant).length > 0
)

// TODO: localize
const ChantText = ({chant, intl: { locale }}: Props) => (
  <section>
    <div className='text'>
      {nl2br(getTransliteratedText(locale, chant))}
      {showNoTranslationMessage(locale, chant) && (
        <p>
          No translation available.
        </p>
      )}
    </div>
    {showTranslation(locale, chant) && (
      <div className='translation'>
        {nl2br(getTranslatedText(locale, chant))}
      </div>
    )}
    <style jsx>{`
      section {
        display: flex;
        flex-direction: column;
      }

      .text {
        margin-right: 25px;
        margin-bottom: 1rem;
      }

      @media (min-width: 600px) {
        .text {
          margin-bottom: 0;
        }

        section {
          flex-direction: row;
        }

        section div {
          width: 50%;
        }
      }
    `}</style>
  </section>
)

export default injectIntl(ChantText)
