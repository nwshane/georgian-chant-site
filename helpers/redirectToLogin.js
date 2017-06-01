// @flow

import {setAppMessage} from '~/data/ducks/appMessage'
import Router from 'next/router'
import type { ServerContext } from '~/data/types'

const getLocale = (req) => (
  req && req.locale ? req.locale : window.__NEXT_DATA__.props.locale
)

const getLoginPathname = (req) => (
  `/${getLocale(req)}/login`
)

export default ({req, res, store}: ServerContext) => {
  store.dispatch(setAppMessage('Please login to access the admin page'))

  if (req) {
    res.writeHead(302, { Location: getLoginPathname(req) })
  } else {
    Router.push('/login', getLoginPathname(req))
  }
}
