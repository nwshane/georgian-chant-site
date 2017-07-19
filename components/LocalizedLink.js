// @flow
import Link from 'next/link'
import { injectIntl } from 'react-intl'
import type { IntlShape } from 'react-intl'

type Props = {
  intl: IntlShape,
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
