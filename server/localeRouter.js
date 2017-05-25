const { Router } = require('express')
const { readFileSync } = require('fs')
const app = require('./app')
const handle = require('./handle')

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
  return require(`../lang/${locale}.json`)
}

const localeRouter = Router({mergeParams: true})

localeRouter.use((req, res, next) => {
  const { locale } = req.params

  req.localeDataScript = getLocaleDataScript(locale)
  req.locale = locale
  req.messages = getMessages(locale)

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

module.exports = localeRouter
