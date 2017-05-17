import Link from 'next/link'
import { FormattedMessage, injectIntl } from 'react-intl'

const Header = ({intl: { locale }}) => (
  <nav>
    <Link href={`/?locale=${locale}`} as={`/${locale}`}>
      <a>
        GeorgianChant.org
      </a>
    </Link>
    <Link href={`/chants?locale=${locale}`} as={`/${locale}/chants`}>
      <a>
        <FormattedMessage
          id='Header.chants'
          defaultMessage='Chants'
        />
      </a>
    </Link>
    <a href='/en'>
      English
    </a>
    <a href='/ka'>
      ქართული
    </a>
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
