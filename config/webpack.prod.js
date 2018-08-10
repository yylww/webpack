
module.exports = {
  mode: 'production',
  entry: require('./entry.config.js'),
  output: require('./output.config.js'),
  module: require('./module.config.js'),
  resolve: require('./resolve.config.js'),
  plugins: require('./plugins.config.js'),
  optimization: require('./optimization.config.js'),
  // externals: require('./externals.config.js'),
  devServer: require('./devServer.config.js'),
  devtool: 'source-map',
  cache: false
}