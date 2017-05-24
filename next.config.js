module.exports = {
  webpack: function (c) {
    // Fixes bug: https://github.com/zeit/next.js/issues/1877
    if (c.resolve.alias) {
      delete c.resolve.alias['react']
      delete c.resolve.alias['react-dom']
    }
    return c
  }
}
