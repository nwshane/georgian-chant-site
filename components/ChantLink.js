// @flow
import { connect } from 'react-redux'
import LocalizedLink from '~/components/LocalizedLink'
import { injectIntl } from 'react-intl'
import { getTransliteratedChantName } from '~/data/getters/chants'

type Props = {
  chantSlug: string,
  text: string
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

const mapStateToProps = (state, {text, chantSlug, intl: { locale }}) => ({
  text: text || getTransliteratedChantName(state, chantSlug, locale)
})

export default injectIntl(connect(mapStateToProps)(ChantLink))
