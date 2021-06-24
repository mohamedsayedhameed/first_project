const path = require("path")
const webpack = require("webpack")
const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, 'dist'),
        libraryTarget: 'var',
        library: 'Client'
    },
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            inject: "body",
            template: "./src/client/views/index.html"
        }),
        new CleanWebpackPlugin(),
        new miniCssExtractPlugin()
    ]
}