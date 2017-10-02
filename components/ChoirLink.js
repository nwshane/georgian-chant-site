// @flow
import React from 'react'
import { connect } from 'react-redux'
import LocalizedLink from '~/components/LocalizedLink'
import { injectIntl } from 'react-intl'
import { getTranslatedChoirName } from '~/data/getters/choirs'
import type { IntlShape } from 'react-intl'
import type { State } from '~/data/types'

type Props = {
  slug: string,
  text: string,
  intl: IntlShape
}

const ChoirLink = ({text, slug}: Props) => {
  return (
    <div>
      <LocalizedLink as={`/choirs/${slug}`} href={`/choirs/show?slug=${slug}`}>
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

const mapStateToProps = (state: State, {text, slug, intl: { locale }}: Props) => ({
  text: text || getTranslatedChoirName(state, slug, locale)
})

export default injectIntl(connect(mapStateToProps)(ChoirLink))
