const { Router } = require('express')
const app = require('./app')
const handle = require('./handle')
const localizeRequest = require('./localizeRequest')
const localeRouter = Router({mergeParams: true})

localeRouter.use((req, res, next) => {
  localizeRequest(req)
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

localeRouter.get('/admin/chants/:slug/edit', (req, res) => {
  app.render(
    req,
    res,
    '/admin/chants/edit',
    { slug: req.params.slug }
  )
})

localeRouter.get('*', (req, res) => {
  handle(req, res)
})

module.exports = localeRouter
