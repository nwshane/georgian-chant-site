// @flow
import LocalizedLink from '~/components/LocalizedLink'
import { FormattedMessage, injectIntl } from 'react-intl'
import LocaleLink from './LocaleLink'
import AccountMenu from './AccountMenu'
import type { IntlShape } from 'react-intl'

// TODO: localize

type Props = {
  intl: IntlShape
}

const Header = ({intl: { locale }}: Props) => (
  <nav>
    <LocalizedLink href='/'>
      <a>
        GeorgianChant.org
      </a>
    </LocalizedLink>
    <LocalizedLink href='/chants'>
      <a>
        <FormattedMessage
          id='Header.chants'
          defaultMessage='Chants'
        />
      </a>
    </LocalizedLink>
    <LocalizedLink href='/recordings'>
      <a>
        Recordings
      </a>
    </LocalizedLink>
    <LocalizedLink href='/about'>
      <a>
        <FormattedMessage
          id='Header.about'
          defaultMessage='About'
        />
      </a>
    </LocalizedLink>
    <AccountMenu />
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
