
const path = require('path');

const outputConfig = {
    filename: '[name]/index.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/'
};

module.exports = outputConfig;