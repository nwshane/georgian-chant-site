// @flow

import type { ServerContext } from '~/data/types'
import isAdminPage from './isAdminPage'
import log from '~/helpers/log'

const loggedIn = (currentUser) => (!!currentUser)

// for now, any user will have admin access. this will change in the
// future if we add different kinds of users
const userHasAdminAccess = (currentUser) => (
  loggedIn(currentUser)
)

export default (context: ServerContext) => (
  log('isAdminPage', isAdminPage(log('pathname', context.pathname))) && log('!userHasAdminAccess', !userHasAdminAccess(context.store.getState().currentUser))
)
