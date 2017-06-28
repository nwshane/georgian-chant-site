// @flow
// This file must be separate from firebase, because storage cannot
// be initialized when the firebase app is used on the server.
import app from './firebase'

export default app.storage
