// @flow
import Link from 'next/link'
import type { Chant } from '~/data/types'
import { injectIntl } from 'react-intl'
import latinizeGeorgian from 'latinize-georgian'

const getTransliteratedName = (chant, locale) => (
  locale === 'ka'
  ? chant.name.ka
  : latinizeGeorgian(chant.name.ka)
)

const ChantLink = ({intl, chant}: {intl: *, chant: Chant})=> {
  const { locale } = intl
  const slug = chant.slug

  return (
    <div>
      <Link as={`/${locale}/chants/${slug}`} href={`/chants/show?slug=${slug}&locale=${locale}`}>
        <a>
          {getTransliteratedName(chant, locale)}
        </a>
      </Link>
      <style jsx>{`
        a {
          text-decoration: none;
        }
      `}</style>
    </div>
  )
}

export default injectIntl(ChantLink)
