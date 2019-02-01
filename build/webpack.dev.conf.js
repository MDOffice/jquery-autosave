const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

module.exports = merge(baseWebpackConfig, {

    mode: 'development',
    //devtool: '#eval-source-map',

    output: {
        path: path.resolve(__dirname, '../example'),
        filename: 'jquery.autosave.js'
    }

});