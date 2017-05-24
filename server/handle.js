// The purpose of this file is to ensure that getRequestHandler
// does not get called more than once, even when the handle
// is needed in multiple files
const app = require('./app')

module.exports = app.getRequestHandler()
