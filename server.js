const express = require('express')
const { Router } = express
const next = require('next')
const { readFileSync } = require('fs')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// We need to expose React Intl's locale data on the request for the user's
// locale. This function will also cache the scripts by lang in memory.
const localeDataCache = new Map()
const getLocaleDataScript = (locale) => {
  const lang = locale.split('-')[0]
  if (!localeDataCache.has(lang)) {
    const localeDataFile = require.resolve(`react-intl/locale-data/${lang}`)
    const localeDataScript = readFileSync(localeDataFile, 'utf8')
    localeDataCache.set(lang, localeDataScript)
  }
  return localeDataCache.get(lang)
}

const getMessages = (locale) => {
  if (locale === 'en') return {}
  return require(`./lang/${locale}.json`)
}

app.prepare()
.then(() => {
  const server = express()
  const localeRouter = Router({mergeParams: true})

  localeRouter.use((req, res, next) => {
    const { locale } = req.params

    req.localeDataScript = getLocaleDataScript(locale)
    req.locale = locale
    req.messages = getMessages(locale)
    req.originalUrl = req.originalUrl

    next()
  })

  localeRouter.get('/chants/:slug', (req, res) => {
    app.render(
      req,
      res,
      '/chants/show',
      { slug: req.params.slug }
    )
  })

  localeRouter.get('*', (req, res) => {
    handle(req, res)
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
