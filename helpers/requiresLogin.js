// @flow

import type { ServerContext } from '~/data/types'

// Seems like the easiest method of universally checking
// whether the page is an admin page is to look for '/admin'
// at the beginning of the pathname
const isAdminPage = ({pathname}) => (
  /^\/admin/.test(pathname)
)

const loggedIn = ({store}: ServerContext) => (
  !!store.getState().currentUser
)

export default (context: ServerContext) => (
  isAdminPage(context) && !loggedIn(context)
)
