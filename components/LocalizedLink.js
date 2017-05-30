// @flow
import Link from 'next/link'
import {injectIntl} from 'react-intl'

type Props = {
  intl: {
    locale: string
  },
  children?: any,
  href: string
}

const LocalizedLink = ({intl: {locale}, children, href, ...props}: Props) => (
  <Link
    href={href}
    as={`/${locale}${href}`}
    {...props}
  >
    {children}
  </Link>
)

export default injectIntl(LocalizedLink)
