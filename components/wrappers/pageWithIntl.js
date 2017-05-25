// @flow
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {IntlProvider, addLocaleData, injectIntl} from 'react-intl'

// Register React Intl's locale data for the user's locale in the browser. This
// locale data was added to the page by `pages/_document.js`. This only happens
// once, on initial page load in the browser.
if (typeof window !== 'undefined' && window.ReactIntlLocaleData) {
  Object.keys(window.ReactIntlLocaleData).forEach((lang) => {
    addLocaleData(window.ReactIntlLocaleData[lang])
  })
}

type ServerContext = {
  req: {
    locale: string, originalUrl: string
  }
}

type Props = {
  originalUrl: ?string,
  locale: string,
  messages: {
    [string]: string
  },
  now: number
}

export default (Page: React$Element<*> | Function) => {
  const IntlPage = injectIntl(Page)

  class PageWithIntl extends Component {
    props: Props

    static childContextTypes = {
      originalUrl: PropTypes.string
    }

    static async getInitialProps (context: ServerContext) {
      let props
      if (typeof Page.getInitialProps === 'function') {
        props = await Page.getInitialProps(context)
      }

      // Get the `locale` and `messages` from the request object on the server.
      // In the browser, use the same values that the server serialized.
      const {req} = context
      const locale = req && req.locale ? req.locale : window.__NEXT_DATA__.props.locale
      const messages = req && req.messages ? req.messages : window.__NEXT_DATA__.props.messages
      const { originalUrl } = req || {}

      // Always update the current time on page load/transition because the
      // <IntlProvider> will be a new instance even with pushState routing.
      const now = Date.now()

      return {...props, originalUrl, locale, messages, now}
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