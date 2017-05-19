import Link from 'next/link'
import { FormattedMessage, injectIntl } from 'react-intl'
import LocaleLink from './LocaleLink'

const Header = ({intl: { locale }}) => (
  <nav>
    <Link href={`/`} as={`/${locale}`}>
      <a>
        GeorgianChant.org
      </a>
    </Link>
    <Link href={`/chants`} as={`/${locale}/chants`}>
      <a>
        <FormattedMessage
          id='Header.chants'
          defaultMessage='Chants'
        />
      </a>
    </Link>
    <Link href='/about' as={`/${locale}/about`}>
      <a>
        <FormattedMessage
          id='Header.about'
          defaultMessage='About'
        />
      </a>
    </Link>
    {locale !== 'en' && <LocaleLink text='En' locale='en' />}
    {locale !== 'ka' && <LocaleLink text='ქა' locale='ka' />}
    <style jsx>{`
      nav {
        display: flex;
        align-items: center;
        height: 60px;
      }

      a {
        text-decoration: none;
        margin: 0 10px;
      }

      a:first-child {
        margin-left: 0;
      }

      a:last-child {
        margin-right: 0;
      }

      a:hover {
        color: black;
      }
    `}</style>
  </nav>
)

export default injectIntl(Header)
