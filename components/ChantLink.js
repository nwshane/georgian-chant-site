// @flow
import React from 'react'
import { connect } from 'react-redux'
import LocalizedLink from '~/components/LocalizedLink'
import { injectIntl } from 'react-intl'
import { getTransliteratedChantName } from '~/data/getters/chants'
import type { IntlShape } from 'react-intl'
import type { State } from '~/data/types'
import ChantSheetMusicTable from '~/components/chant/ChantSheetMusicTable'

type Props = {
  chantSlug: string,
  text: string,
  intl: IntlShape
}

const ChantLink = ({text, chantSlug}: Props) => {
  return (
    <div>
      <LocalizedLink as={`/chants/${chantSlug}`} href={`/chants/show?slug=${chantSlug}`}>
        <a>
          {text}
        </a>
      </LocalizedLink>
      <style jsx>{`
        a {
          text-decoration: none;
        }
      `}</style>
    </div>
  )
}

const mapStateToProps = (state: State, {text, chantSlug, intl: { locale }}: Props) => ({
  text: text || getTransliteratedChantName(state, chantSlug, locale)
})

export default injectIntl(connect(mapStateToProps)(ChantLink))
