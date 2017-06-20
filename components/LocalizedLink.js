// @flow
import Link from 'next/link'
import {injectIntl} from 'react-intl'

type Props = {
  intl: {
    locale: string
  },
  children?: any,
  href: string,
  as?: string
}

const LocalizedLink = ({intl: {locale}, children, href, as, ...props}: Props) => (
  <Link
    href={href}
    as={`/${locale}${as || href}`}
    {...props}
  >
    {children}
  </Link>
)

export default injectIntl(LocalizedLink)
