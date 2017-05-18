import Link from 'next/link'
import { injectIntl } from 'react-intl'

const ChantLink = props => {
  const { locale } = props.intl
  const slug = props.data.get('slug')

  return (
    <Link as={`/${locale}/chants/${slug}`} href={`/chants/show?slug=${slug}`}>
      <a>
        {props.data.get('name').get('ka')}
      </a>
      <style jsx>{`
        a {
          text-decoration: none;
        }
      `}</style>
    </Link>
  )
}

export default injectIntl(ChantLink)
