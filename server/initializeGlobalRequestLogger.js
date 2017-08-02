const globalLog = require('global-request-logger')
const winston = require('winston')

globalLog.initialize()

globalLog.on('success', function (request, response) {
  winston.debug('Successful outgoing request. Request:', request, 'Response: ', response)
})

globalLog.on('error', function (request, response) {
  winston.debug('Errored outgoing request. Request:', request, 'Response: ', response)
})
