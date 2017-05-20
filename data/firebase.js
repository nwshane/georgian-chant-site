import firebase from 'firebase'

const getFirebaseApp = () => (
  firebase.apps.length === 0 ? firebase.initializeApp({
    apiKey: 'AIzaSyANmrGU6f8MiUGC_gxs4BeB8kRZQuMWuNc',
    authDomain: 'georgian-chant-site.firebaseapp.com',
    databaseURL: 'https://georgian-chant-site.firebaseio.com',
    projectId: 'georgian-chant-site',
    storageBucket: 'georgian-chant-site.appspot.com',
    messagingSenderId: '730123756383'
  }) : firebase.apps[0]
)

let app = getFirebaseApp()

export default app
export const database = app.database()
