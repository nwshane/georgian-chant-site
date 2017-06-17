debugger
const admin = require('firebase-admin')
const serviceAccount = require('./georgian-chant-site-firebase-adminsdk-t5tsp-8684456524.json')

return admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://georgian-chant-site.firebaseio.com'
})
