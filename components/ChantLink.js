// @flow
import Link from 'next/link'
import type { Chant } from '~/data/types'
import { injectIntl } from 'react-intl'

const ChantLink = ({intl, chant}: {intl: *, chant: Chant})=> {
  const { locale } = intl
  const slug = chant.get('slug')

  return (
    <div>
      <Link as={`/${locale}/chants/${slug}`} href={`/chants/show?slug=${slug}&locale=${locale}`}>
        <a>
          {chant.get('name').get('ka')}
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
