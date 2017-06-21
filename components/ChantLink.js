// @flow
import LocalizedLink from '~/components/LocalizedLink'
import type { Chant } from '~/data/types'
import { injectIntl } from 'react-intl'
import { getTransliteratedName } from '~/data/getters'

const ChantLink = ({intl, chant}: {intl: *, chant: Chant}) => {
  const { locale } = intl
  const slug = chant.slug

  return (
    <div>
      <LocalizedLink as={`/chants/${slug}`} href={`/chants/show?slug=${slug}`}>
        <a>
          {getTransliteratedName(chant, locale)}
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

export default injectIntl(ChantLink)
