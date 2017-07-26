// @flow

import Router from 'next/router'
import type { ServerContext } from '~/data/types'

const getLocale = (req = {}) => (
  req.locale ? req.locale : window.__NEXT_DATA__.props.initialProps.locale
)

const getLocalizedPathname = (pathname, req) => (
  `/${getLocale(req)}${pathname}`
)

// Takes an href URL obj, an optional AS obj, and an optional ServerContext
// (typically provided by a Page's getInitialProps static method).
// If you want to use it universally, you must provide a server
// context.
type Url = {
  pathname: string
}

export default (href: Url, as: ?Url, {req, res}: ServerContext = {}) => {
  let asUrl = as || href
  if (req) {
    res.redirect(getLocalizedPathname(asUrl.pathname, req))
  } else {
    Router.push(href, getLocalizedPathname(asUrl.pathname, req))
  }
}
