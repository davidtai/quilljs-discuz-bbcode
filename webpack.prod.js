const config = require('./webpack.dev');

config.mode = 'production';
config.watch = false;

module.exports = config;
