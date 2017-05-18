import Link from 'next/link'
import { injectIntl } from 'react-intl'

const ChantLink = props => {
  const { locale } = props.intl
  const slug = props.data.get('slug')

  return (
    <div>
      <Link as={`/${locale}/chants/${slug}`} href={`/chants/show?slug=${slug}&locale=${locale}`}>
        <a>
          {props.data.get('name').get('ka')}
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
