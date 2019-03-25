var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
    mode: 'development',
    target: 'web',
    watch: true,
    entry: './src/main.js',
    output: {
        library: 'bbcode',
        libraryTarget: 'umd',
        path: path.resolve('dist'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: 'package.json', to: 'package.json'
            }
        ])
    ],
    devServer: {
        port: 8100,
        contentBase: path.resolve('public'),
        historyApiFallback: false,
        inline: true,
        hot: false
    }
};
