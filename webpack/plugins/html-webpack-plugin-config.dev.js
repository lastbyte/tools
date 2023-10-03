const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const {version, name} = require('../../package.json');

module.exports = new HtmlWebpackPlugin({
    alwaysWriteToDisk: true,
    template: path.resolve(__dirname, '../../src/views/index.dev.ejs'),
    inject: "head",
})