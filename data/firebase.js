// @flow
import firebase from 'firebase'
import firebaseConfig from './firebaseConfig'

const env = process.env.NODE_ENV || 'development'

const getOrInitializeFirebaseApp = () => (
  firebase.apps.length === 0
    ? firebase.initializeApp(firebaseConfig[env])
    : firebase.apps[0]
)

let app = getOrInitializeFirebaseApp()

// Note: To use storage, you have to call app.storage() directly in the
// client code, because storage cannot be loaded on the server.
export default app
export const database = app.database()
export const auth = app.auth()
