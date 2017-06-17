// @flow

import type { ServerContext } from '~/data/types'

// Seems like the easiest method of universally checking
// whether the page is an admin page is to look for '/admin'
// at the beginning of the pathname
const isAdminPage = ({pathname}) => (
  /^\/admin/.test(pathname)
)

const loggedIn = (currentUser) => (!!currentUser)

// for now, any user will have admin access. this will change in the
// future if we add different kinds of users
const userHasAdminAccess = (currentUser) => (
  loggedIn(currentUser)
)

export default (context: ServerContext) => (
  isAdminPage(context) && !userHasAdminAccess(context.store.getState().currentUser)
)
