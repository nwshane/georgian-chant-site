const winston = require('winston')
const getNodeEnv = require('../helpers/getNodeEnv')

if (getNodeEnv() === 'development') {
  winston.level = 'debug'
} else {
  winston.level = 'info'
}

winston.handleExceptions()
