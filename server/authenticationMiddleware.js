const firebaseAdmin = require('firebase-admin')

const serviceAccount = require('../georgian-chant-site-firebase-adminsdk-t5tsp-8684456524.json')

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: 'https://georgian-chant-site.firebaseio.com'
})

const FIREBASE_ID_TOKEN_COOKIE = 'firebaseIdToken'

async function authenticationMiddleware(req, res, next) {
  const { firebaseIdToken } = req.cookies

  if (firebaseIdToken) {
    try {
      const decodedToken = await firebaseAdmin.auth().verifyIdToken(firebaseIdToken)
      const userData = await firebaseAdmin.auth().getUser(decodedToken.uid)
      req.currentUserServerData = userData
    } catch(error) {
      if (error.code === 'auth/argument-error') {
        res.clearCookie(FIREBASE_ID_TOKEN_COOKIE)
      }
    }
  }

  next()
}

authenticationMiddleware.authWithIdTokenRoute = ({body: { idToken }}, res) => {
  res.cookie(FIREBASE_ID_TOKEN_COOKIE, idToken)
  res.send()
}

module.exports = authenticationMiddleware
