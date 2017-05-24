// Required by material ui library
// See http://www.material-ui.com/#/get-started/server-rendering
module.exports = (req) => {
  global.navigator = global.navigator || {}
  global.navigator = { userAgent: req.headers['user-agent'] || 'all' }
}
