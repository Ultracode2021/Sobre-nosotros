const HtmlWebpackPlugin = require("html-webpack-plugin")
const { Template } = require("webpack")

module.exports = {
        mode: 'development',
        output: {
                filename: 'app.bundle.js'
        },
        plugins: [
                new HtmlWebpackPlugin({
                        template: 'src/index.html'
                })
        ],
        module: {
                rules: [
                        {
                                test: /\.js$/,
                                exclude: /node_modules/,
                                use: {
                                        loader: 'babel-loader',
                                        options: {
                                                presets: [
                                                        '@babel/preset-env',
                                                        '@babel/preset-react'
                                                ]
                                        }
                                }
                        }
                ]
        }
}