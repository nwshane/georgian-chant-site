const { FIREBASE_ID_TOKEN_COOKIE } = require('../universal/constants')
const firebaseAdmin = require('firebase-admin')

const serviceAccount = require('../georgian-chant-site-firebase-adminsdk-t5tsp-8684456524.json')

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: 'https://georgian-chant-site.firebaseio.com'
})

async function decodeToken (firebaseIdToken) {
  return firebaseAdmin.auth().verifyIdToken(firebaseIdToken)
}

async function authenticationMiddleware (req, res, next) {
  const { firebaseIdToken } = req.cookies

  if (firebaseIdToken) {
    try {
      const decodedToken = await decodeToken(firebaseIdToken)
      const userData = await firebaseAdmin.auth().getUser(decodedToken.uid)
      req.currentUserServerData = userData
    } catch (error) {
      if (error.code === 'auth/argument-error') {
        res.clearCookie(FIREBASE_ID_TOKEN_COOKIE)
      }
    }
  }

  next()
}

authenticationMiddleware.authWithIdTokenRoute = async function ({body: { idToken }}, res) {
  try {
    const decodedToken = await decodeToken(idToken)
    res.cookie(FIREBASE_ID_TOKEN_COOKIE, idToken, { expires: new Date(decodedToken.exp * 1000) })
    res.send()
  } catch (error) {
    if (error.code === 'auth/argument-error') {
      res.status(400)
      res.send(
        'error',
        {
          error: new Error('Could not decode token')
        }
      )
    } else {
      res.status(500)
      res.send()
    }
  }
}

module.exports = authenticationMiddleware
