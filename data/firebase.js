// @flow
import firebase from 'firebase'

const getOrInitializeFirebaseApp = () => (
  firebase.apps.length === 0 ? firebase.initializeApp({
    apiKey: 'AIzaSyANmrGU6f8MiUGC_gxs4BeB8kRZQuMWuNc',
    authDomain: 'georgian-chant-site.firebaseapp.com',
    databaseURL: 'https://georgian-chant-site.firebaseio.com',
    projectId: 'georgian-chant-site',
    storageBucket: 'georgian-chant-site.appspot.com',
    messagingSenderId: '730123756383'
  }) : firebase.apps[0]
)

let app = getOrInitializeFirebaseApp()

// Note: To use storage, you have to call app.storage() directly in the
// client code, because storage cannot be loaded on the server.
export default app
export const database = app.database()
export const auth = app.auth()
