const bodyParser = require('body-parser')

// Source: https://stackoverflow.com/questions/5710358/how-to-retrieve-post-query-parameters
module.exports = (server) => {
  server.use(bodyParser.json())       // to support JSON-encoded bodies
  server.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
  }))
}
