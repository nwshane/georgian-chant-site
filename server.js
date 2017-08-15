const getEnvPath = require('./server/getEnvPath')
require('dotenv').config({path: getEnvPath()})

const express = require('express')
const localeRouter = require('./server/localeRouter')
const app = require('./server/app')
const handle = require('./server/handle')
const setGlobalNavigatorUserAgent = require('./server/setGlobalNavigatorUserAgent')
const localizeRequest = require('./server/localizeRequest')
const cookieParser = require('cookie-parser')
const authenticationMiddleware = require('./server/authenticationMiddleware')
const { authWithIdTokenRoute } = authenticationMiddleware
const allowParsingPostBody = require('./server/allowParsingPostBody.js')
const winston = require('winston')
const getNodeEnv = require('./helpers/getNodeEnv')
require('./server/initializeWinston.js')
require('./server/initializeGlobalRequestLogger.js')

winston.info('Starting server', {
  NODE_ENV: getNodeEnv(),
  loggingLevel: winston.level,
  envPath: getEnvPath(),
  FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID
})

app.prepare()
.then(() => {
  const server = express()

  server.use((req, res, next) => {
    setGlobalNavigatorUserAgent(req)
    next()
  })

  allowParsingPostBody(server)
  server.use(cookieParser())
  server.use('*', authenticationMiddleware)
  server.post('/authWithIdToken', authWithIdTokenRoute)

  server.get('/', (req, res) => {
    return res.redirect('/ka')
  })

  server.use('/:locale(en|ka)', localeRouter)

  server.get('*', (req, res) => {
    localizeRequest(req)
    return handle(req, res)
  })

  server.listen(3001, (err) => {
    if (err) throw err
    winston.info('Server ready on port 3001')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
