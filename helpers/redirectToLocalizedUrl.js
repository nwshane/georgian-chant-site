// @flow

import Router from 'next/router'
import type { ServerContext } from '~/data/types'

const getLocale = (req = {}) => (
  req.locale ? req.locale : window.__NEXT_DATA__.props.locale
)

const getLocalizedPathname = (pathname, req) => (
  `/${getLocale(req)}${pathname}`
)

export default (pathname: string, {req, res, store}: ServerContext = {}) => {
  if (req) {
    res.redirect(getLocalizedPathname(pathname, req))
  } else {
    Router.push(pathname, getLocalizedPathname(pathname, req))
  }
}
