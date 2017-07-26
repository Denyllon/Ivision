/*jshint esversion: 6 */
const webpack = require('webpack');
const {resolve} = require("path");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

    entry: {
        main: "./src/js/main.js"
    },
    output: {
        path: resolve(__dirname, "dist/"),
        filename: "js/[name].js"
    },

    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader: "css-loader",
                        options: { sourceMap: true }
                    }, {
                        loader: "postcss-loader",
                        options: { sourceMap: true }
                    }, {
                        loader: "sass-loader",
                        options: { sourceMap: true }
                    }]
                    
                })

            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: 'file-loader?name=[name].[ext]&publicPath=../&outputPath=img/'
            },
            {
                test: /\.html/,
                include: resolve(__dirname, "src/views"),
                use: 'file-loader?name=[name].[ext]&outputPath=views/'
            }
            
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor' // Specify the common bundle's name.
            }),
        new ExtractTextWebpackPlugin("css/main.css"),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]

};