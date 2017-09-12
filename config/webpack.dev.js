
module.exports = {
    entry: require('./entry.config.js'),

    output: require('./output.config.js'),

    module: require('./module.config.js'),

    resolve: require('./resolve.config.js'),

    plugins: require('./plugins.config.js'),

    devServer: require('./devServer.config.js'),

    devtool: 'eval-source-map',

    cache: true
};