const ExtractTextPlugin= require("extract-text-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: {
        vendor: [ "jquery" ],
        // nju: [ "./nju/resource/index.less" ],
        nm: [ "./nm/index.js", "./nm/resource/index.less" ],
    },
    output: {
        path: path.resolve(__dirname, "assets"),
        publicPath: "assets",
        filename: "[name]/bundle.js",
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: [
                    "babel-loader?sourceRoot=./src",
                ],
            },
            {
                test: /\.less$/,
                loader:  ExtractTextPlugin.extract("style", "css!less"), 
            },
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            "$": "jquery",
            "jQuery": "jquery",
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: Infinity,
        }),
        new ExtractTextPlugin("./[name]/resource/bundle.css"),
    ],
};