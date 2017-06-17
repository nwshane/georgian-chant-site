const express = require('express')
const localeRouter = require('./server/localeRouter')
const app = require('./server/app')
const handle = require('./server/handle')
const setGlobalNavigatorUserAgent = require('./server/setGlobalNavigatorUserAgent')
const localizeRequest = require('./server/localizeRequest')
const cookieParser = require('cookie-parser')
const authenticationRouter = require('./server/authenticationRouter')
const { authWithIdTokenRoute } = authenticationRouter
const allowParsingPostBody = require('./server/allowParsingPostBody.js')

app.prepare()
.then(() => {
  const server = express()

  server.use((req, res, next) => {
    setGlobalNavigatorUserAgent(req)
    next()
  })

  allowParsingPostBody(server)
  server.use(cookieParser())
  server.use('*', authenticationRouter)
  server.post('/authWithIdToken', authWithIdTokenRoute)

  server.get('/', (req, res) => {
    res.redirect('/ka')
  })

  server.use('/:locale(en|ka)', localeRouter)

  server.get('*', (req, res) => {
    localizeRequest(req)
    handle(req, res)
  })

  server.listen(3001, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3001')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
