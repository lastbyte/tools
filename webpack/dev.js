const webpackMerge = require('webpack-merge');
const coreConfig = require('./core');
const path = require("path");
const HtmlWebpackPluginConfig = require("./plugins/html-webpack-plugin-config.dev");

module.exports = webpackMerge.merge(coreConfig, {
    mode: "development",
    devtool: "eval-source-map",
    devServer: {
        port: "8080",
        compress: true,
        static: path.resolve(__dirname, '../public/assets'),
        hot: true,
        historyApiFallback: true,
    },
    plugins: [HtmlWebpackPluginConfig]
});