const webpack = require('webpack');
const { merge } = require('webpack-merge');
const path = require('path');

const common = {
    entry: './src/index.ts',

    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader?cacheDirectory=true'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },

    devServer: {
        contentBase: [
            path.join(__dirname, 'examples'),
            path.join(__dirname, 'dist')
        ],
        compress: true,
        progress: true,
        open: true,
        port: 9000
    }
};

module.exports = [
    merge(common, {
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'jquery.autosave.umd.js',
            library: 'Autosave',
            libraryTarget: 'umd',
            umdNamedDefine: true
        },

        externals: {
            jquery: 'jQuery'
        },

        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery'
            })
        ]
    }),
    merge(common, {
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'jquery.autosave.js',
            library: 'Autosave',
            libraryTarget: 'umd',
            umdNamedDefine: true
        },

        externals: {
            jquery: 'jquery'
        },

        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery'
            })
        ]
    })
];
