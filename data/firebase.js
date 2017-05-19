import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyANmrGU6f8MiUGC_gxs4BeB8kRZQuMWuNc',
  authDomain: 'georgian-chant-site.firebaseapp.com',
  databaseURL: 'https://georgian-chant-site.firebaseio.com',
  projectId: 'georgian-chant-site',
  storageBucket: 'georgian-chant-site.appspot.com',
  messagingSenderId: '730123756383'
}

if (typeof window === 'object') firebase.initializeApp(config)

export default firebase

export const database = firebase.database()
