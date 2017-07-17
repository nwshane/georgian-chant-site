const { FIREBASE_ID_TOKEN_COOKIE } = require('../universal/constants')
const firebaseAdmin = require('firebase-admin')

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
  return firebaseAdmin.auth().verifyIdToken(firebaseIdToken)
}

const getFullUrl = (req) => (
  req.protocol + '://' + req.get('host') + req.originalUrl
)

const getRedirectUrl = (req) => (
  `/redirect?url=${encodeURIComponent(getFullUrl(req))}`
)

async function authenticationMiddleware (req, res, next) {
  const { firebaseIdToken } = req.cookies

  if (firebaseIdToken) {
    try {
      const decodedToken = await decodeToken(firebaseIdToken)
      const userData = await firebaseAdmin.auth().getUser(decodedToken.uid)
      req.currentUserServerData = userData
    } catch (error) {
      // if the cookie id token has expired, redirect the user to
      // /redirect?url={requestedUrl} - the client will try to set
      // a new cookie and then will redirect to requestedUrl
      res.clearCookie(FIREBASE_ID_TOKEN_COOKIE)
      res.redirect(getRedirectUrl(req))
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
