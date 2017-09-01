const webpack = require('webpack')

module.exports = {
  webpack: function (config) {
    // Fixes bug: https://github.com/zeit/next.js/issues/1877
    if (config.resolve.alias) {
      delete config.resolve.alias['react']
      delete config.resolve.alias['react-dom']
    }

    config.plugins.push(new webpack.DefinePlugin({
      'process.env.FIREBASE_ENV': JSON.stringify(process.env.FIREBASE_ENV || '')
    }))

    return config
  }
}
