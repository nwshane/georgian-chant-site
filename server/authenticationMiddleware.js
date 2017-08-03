const { FIREBASE_ID_TOKEN_COOKIE } = require('../universal/constants')
const firebaseAdmin = require('firebase-admin')
const winston = require('winston')

const getFirebaseCredentials = () => {
  const {
    FIREBASE_TYPE: type,
    FIREBASE_PROJECT_ID: projectId,
    FIREBASE_PRIVATE_KEY_ID: privateKeyId,
    FIREBASE_PRIVATE_KEY: privateKey,
    FIREBASE_CLIENT_EMAIL: clientEmail,
    FIREBASE_CLIENT_ID: clientId,
    FIREBASE_AUTH_URI: authUri,
    FIREBASE_TOKEN_URI: tokenUri,
    FIREBASE_AUTH_PROVIDER_CERT_URL: authProviderX509CertUrl,
    FIREBASE_CLIENT_CERT_URL: clientX509CertUrl
  } = process.env

  return {
    type,
    projectId,
    privateKeyId,
    privateKey,
    clientEmail,
    clientId,
    authUri,
    tokenUri,
    authProviderX509CertUrl,
    clientX509CertUrl
  }
}

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(getFirebaseCredentials()),
  databaseURL: 'https://georgian-chant-site.firebaseio.com'
})

async function decodeToken (firebaseIdToken) {
  try {
    const decodedToken = await firebaseAdmin.auth().verifyIdToken(firebaseIdToken)
    return decodedToken
  } catch (error) {
    if (error.code !== 'auth/internal-error') throw error
    winston.warn(
      'firebase admin auth verifyIdToken auth/internal-error:',
      {
        firebaseIdToken,
        error
      }
    )
  }
}

const getFullUrl = (req) => (
  req.protocol + '://' + req.get('host') + req.originalUrl
)

const getRedirectUrl = (req) => (
  `/redirect?url=${encodeURIComponent(getFullUrl(req))}`
)

async function getUserData (uid) {
  try {
    const userData = await firebaseAdmin.auth().getUser(uid)
    return userData
  } catch (error) {
    if (error.code !== 'auth/internal-error') throw error
    winston.warn(
      'firebase admin auth getUser auth/internal-error:',
      {
        uid,
        error
      }
    )
  }
}

async function authenticationMiddleware (req, res, next) {
  const { firebaseIdToken } = req.cookies

  if (firebaseIdToken) {
    try {
      req.currentUserServerData = await getUserData(
        (await decodeToken(firebaseIdToken))
        .uid
      )
    } catch (error) {
      res.clearCookie(FIREBASE_ID_TOKEN_COOKIE)

      // if the cookie id token has expired, redirect the user to
      // /redirect?url={requestedUrl} - the client will try to set
      // a new cookie and then will redirect to requestedUrl
      if (error.code === 'auth/argument-error') {
        return res.redirect(getRedirectUrl(req))
      } else {
        winston.warn('Unexpected error occurred while processing firebase idToken:', error)
      }
    }
  }

  next()
}

authenticationMiddleware.authWithIdTokenRoute = async function ({body: { idToken }}, res) {
  try {
    await decodeToken(idToken)
    const expireDate = (new Date())
    expireDate.setYear((new Date()).getFullYear() + 1)
    res.cookie(FIREBASE_ID_TOKEN_COOKIE, idToken, { expires: expireDate })
    return res.send()
  } catch (error) {
    winston.warn('authWithIdTokenRoute unexpected error', {
      idToken,
      error
    })

    if (error.code === 'auth/argument-error') {
      return res
      .status(400)
      .send({
        error: new Error('Could not decode token')
      })
    } else {
      return res.status(500).send()
    }
  }
}

module.exports = authenticationMiddleware
