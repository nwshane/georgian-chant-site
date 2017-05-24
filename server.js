const express = require('express')
const localeRouter = require('./server/localeRouter')
const app = require('./server/app')
const handle = require('./server/handle')
const setGlobalNavigatorUserAgent = require('./server/setGlobalNavigatorUserAgent')

app.prepare()
.then(() => {
  const server = express()

  server.use((req, res, next) => {
    setGlobalNavigatorUserAgent(req)
    next()
  })

  server.use('/:locale(en|ka)', localeRouter)

  server.get('/', (req, res) => {
    res.redirect('/ka')
  })

  server.get('*', (req, res) => {
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
