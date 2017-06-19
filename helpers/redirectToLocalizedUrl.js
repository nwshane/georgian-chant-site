// @flow

import Router from 'next/router'
import type { ServerContext } from '~/data/types'

const getLocale = (req = {}) => (
  req.locale ? req.locale : window.__NEXT_DATA__.props.locale
)

const getLocalizedPathname = (pathname, req) => (
  `/${getLocale(req)}${pathname}`
)

// Takes a pathname, and an optional ServerContext (typically
// provided by a Page's getInitialProps static method).
// If you want to use it universally, you must provide a server
// context.
export default (pathname: string, {req, res, store}: ServerContext = {}) => {
  if (req) {
    res.redirect(getLocalizedPathname(pathname, req))
  } else {
    Router.push(pathname, getLocalizedPathname(pathname, req))
  }
}
