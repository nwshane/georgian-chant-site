// @flow
import firebase from 'firebase'
import firebaseConfig from './firebaseConfig'
import getNodeEnv from '~/helpers/getNodeEnv'

const getOrInitializeFirebaseApp = () => {
  // NODE_ENV is set to development or production by Next JS's webpack build,
  // so have to use FIREBASE_ENV to get e.g. firebaseConfig["test"]
  return firebase.apps.length === 0
    ? firebase.initializeApp(firebaseConfig[process.env.FIREBASE_ENV || getNodeEnv()])
    : firebase.apps[0]
}

let app = getOrInitializeFirebaseApp()

// Note: To use storage, you have to call app.storage() directly in the
// client code, because storage cannot be loaded on the server.
export default app
export const database = app.database()
export const auth = app.auth()
