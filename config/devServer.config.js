
const path = require('path');

const devServerConfig = {
    contentBase: path.join(__dirname, '../'),
    port: 3000,
    historyApiFallback: true
};

module.exports = devServerConfig;