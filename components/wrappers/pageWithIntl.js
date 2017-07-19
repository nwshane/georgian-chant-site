// @flow
import React, { Component } from 'react'
import type { Element } from 'react'
import PropTypes from 'prop-types'
import {IntlProvider, addLocaleData, injectIntl} from 'react-intl'
import requiresLogin from '~/helpers/requiresLogin'
import redirectToLocalizedUrl from '~/helpers/redirectToLocalizedUrl'
import type { ServerContext } from '~/data/types'
import { setCurrentUser } from '~/data/ducks/currentUser'
import {setAppMessage} from '~/data/ducks/appMessage'

// Register React Intl's locale data for the user's locale in the browser. This
// locale data was added to the page by `pages/_document.js`. This only happens
// once, on initial page load in the browser.
if (typeof window !== 'undefined' && window.ReactIntlLocaleData) {
  Object.keys(window.ReactIntlLocaleData).forEach((lang) => {
    addLocaleData(window.ReactIntlLocaleData[lang])
  })
}

type Props = {
  originalUrl: ?string,
  locale: string,
  messages: {
    [string]: string
  },
  now: number
}

const getLocale = (req) => (
  req && req.locale ? req.locale : window.__NEXT_DATA__.props.locale
)

export default (Page: Element<*> | Function) => {
  const IntlPage = injectIntl(Page)

  class PageWithIntl extends Component {
    props: Props

    static childContextTypes = {
      originalUrl: PropTypes.string
    }

    static async getInitialProps (context: ServerContext) {
      // Get the `locale` and `messages` from the request object on the server.
      // In the browser, use the same values that the server serialized.
      const { req, store } = context
      const locale = getLocale(req)
      const messages = req && req.messages ? req.messages : window.__NEXT_DATA__.props.messages
      const { originalUrl } = req || {}

      // Always update the current time on page load/transition because the
      // <IntlProvider> will be a new instance even with pushState routing.
      const now = Date.now()

      if (req && req.currentUserServerData) {
        store.dispatch(setCurrentUser(req.currentUserServerData))
      }

      if (requiresLogin(context)) {
        redirectToLocalizedUrl({ pathname: '/login' }, null, context)

        store.dispatch(setAppMessage({
          text: 'Please login to access the admin page',
          category: 'neutral'
        }))

        return
      }

      let props
      if (typeof Page.getInitialProps === 'function') {
        props = await Page.getInitialProps(context)
      }

      return {
        ...props,
        originalUrl,
        locale,
        messages,
        now
      }
    }

    getChildContext () {
      const { originalUrl } = this.props
      return { originalUrl }
    }

    render () {
      const {locale, messages, now, ...props} = this.props
      return (
        <IntlProvider locale={locale} messages={messages} initialNow={now}>
          <IntlPage {...props} />
        </IntlProvider>
      )
    }
  }

  return PageWithIntl
}
