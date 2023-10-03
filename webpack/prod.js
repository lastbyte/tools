const webpackMerge = require('webpack-merge');
const coreConfig = require('./core');
const ServiceWorker = require("./plugins/service-worker");
const HtmlWebpackPluginConfig = require("./plugins/html-webpack-plugin-config");

module.exports = webpackMerge.merge(coreConfig, {
    mode: "production",
    plugins: [HtmlWebpackPluginConfig, ServiceWorker],
});