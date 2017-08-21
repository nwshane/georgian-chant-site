const firebaseAdmin = require('firebase-admin')

// ENV variables are set in .env file and loaded by dotenv.
// See for more info: https://github.com/motdotla/dotenv
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
    privateKey: privateKey.replace(/\\n/g, '\n'),
    clientEmail,
    clientId,
    authUri,
    tokenUri,
    authProviderX509CertUrl,
    clientX509CertUrl
  }
}

const getDatabaseUrl = () => {
  const { projectId } = getFirebaseCredentials()
  return `https://${projectId}.firebaseio.com`
}

module.exports = () => ({
  credential: firebaseAdmin.credential.cert(getFirebaseCredentials()),
  databaseURL: getDatabaseUrl()
})
