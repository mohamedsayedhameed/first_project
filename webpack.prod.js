const path = require("path")
const webpack = require("webpack")
const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    mode: 'production',
    optimization: {
        minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
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
                use: [miniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            inject: "body",
            template: "./src/client/views/index.html"
        }),
        new CleanWebpackPlugin(),
        new miniCssExtractPlugin(),
        new WorkboxPlugin.GenerateSW()
    ]
}