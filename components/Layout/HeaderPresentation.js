// @flow
import React from 'react'
import LocalizedLink from '~/components/LocalizedLink'
import { FormattedMessage, injectIntl } from 'react-intl'
import LocaleLink from './LocaleLink'
import AccountMenu from './AccountMenu'
import type { IntlShape } from 'react-intl'
import FlatButton from 'material-ui/FlatButton'

// TODO: localize

type Props = {
  accountMenuVisible: boolean,
  menuVisible: boolean,
  toggleMenu: Function,
  intl: IntlShape
}

const hidableMenuWidth = '730px'

const HeaderPresentation = (props: Props) => {
  const {accountMenuVisible, intl: {locale}, menuVisible, toggleMenu} = props

  return (
    <nav>
      <div className='brand'>
        <LocalizedLink href='/'>
          <a>
            GeorgianChant.org
          </a>
        </LocalizedLink>
      </div>
      <div className='button-container'>
        <FlatButton
          label={menuVisible ? 'Hide Menu' : 'Menu'}
          labelStyle={{fontSize: '2rem', letterSpacing: '.2rem'}}
          type='button'
          onClick={toggleMenu}
        />
      </div>
      <ul className={menuVisible ? '' : 'not-visible-small-screen'}>
        <li>
          <LocalizedLink href='/chants'>
            <a>
              <FormattedMessage
                id='Header.chants'
                defaultMessage='Chants'
              />
            </a>
          </LocalizedLink>
        </li>
        <li>
          <LocalizedLink href='/choirs'>
            <a>
              <FormattedMessage
                id='Header.choirs'
                defaultMessage='Choirs'
              />
            </a>
          </LocalizedLink>
        </li>
        <li>
          <LocalizedLink href='/recordings'>
            <a>
              Recordings
            </a>
          </LocalizedLink>
        </li>
        <li>
          <LocalizedLink href='/about'>
            <a>
              <FormattedMessage
                id='Header.about'
                defaultMessage='About'
              />
            </a>
          </LocalizedLink>
        </li>
        {accountMenuVisible && (
          <li>
            <AccountMenu />
          </li>
        )}
        <li>
          <LocaleLink text='En' locale='en' disabled={locale === 'en'} /> / <LocaleLink text='ქა' locale='ka' disabled={locale === 'ka'} />
        </li>
      </ul>
      <style jsx>{`
        .brand {
          margin-right: 40px;
          font-size: 2.3rem;
        }

        .button-container {
          margin-top: 20px;
          text-align: center;
        }

        @media (min-width: ${hidableMenuWidth}) {
          .button-container {
            display: none;
          }
        }

        .not-visible-small-screen {
          display: none;
        }

        @media (min-width: ${hidableMenuWidth}) {
          .not-visible-small-screen {
            display: flex;
          }
        }

        nav {
          margin-top: 15px;
        }

        ul {
          margin: 0;
          padding: 0;
        }

        @media (min-width: ${hidableMenuWidth}) {
          nav {
            display: flex;
            align-items: baseline;
            flex-direction: row;
            justify-content: space-between;
          }

          ul {
            display: flex;
            align-items: baseline;
            flex-direction: row;
          }
        }

        li {
          list-style-type: none;
          text-align: center;
          margin: 10px 15px;
        }

        a {
          text-decoration: none;
        }
        /*nav {
          display: flex;
          align-items: center;
          height: 60px;
        }

        a {
        margin: 0 10px;
        }

        a:first-child {
        margin-left: 0;
        }

        a:last-child {
        margin-right: 0;
        }*/

        a:hover {
          color: black;
        }
      `}</style>
    </nav>
  )
}

export default injectIntl(HeaderPresentation)
