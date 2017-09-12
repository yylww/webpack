
const webpackConfig = process.env.NODE_ENV === 'dev' ?
    require('./config/webpack.dev.js') : 
    require('./config/webpack.prod.js');

module.exports = webpackConfig;