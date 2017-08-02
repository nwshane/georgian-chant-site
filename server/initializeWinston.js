const winston = require('winston')
const getNodeEnv = require('../helpers/getNodeEnv')

const getWinstonLevel = (nodeEnv) => (
  nodeEnv === 'development'
    ? 'debug'
    : 'debug'
)

winston.level = getWinstonLevel(getNodeEnv())

winston.handleExceptions()
