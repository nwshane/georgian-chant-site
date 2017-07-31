const next = require('next')
const getNodeEnv = require('../helpers/getNodeEnv')

const dev = getNodeEnv() === 'development'
const app = next({ dev })

module.exports = app
