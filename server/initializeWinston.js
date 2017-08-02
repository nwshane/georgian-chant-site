const winston = require('winston')
const getNodeEnv = require('../helpers/getNodeEnv')

const getWinstonLevel = (nodeEnv) => (
  nodeEnv === 'development'
    ? 'debug'
    : 'info'
)

winston.level = getWinstonLevel(getNodeEnv())

winston.handleExceptions()
