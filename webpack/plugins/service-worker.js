const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = new WorkboxPlugin.GenerateSW({
    // these options encourage the ServiceWorkers to get in there fast
    // and not allow any straggling "old" SWs to hang around
    maximumFileSizeToCacheInBytes: Number.MAX_VALUE,
    exclude: [/app.js/, /worker.js/],
    runtimeCaching: [
        {
            urlPattern: new RegExp(/assets/),
            handler: "CacheFirst",
        },
        {
            urlPattern: new RegExp(/manifest\.json/),
            handler: "CacheFirst",
        },
        {
            urlPattern: new RegExp(/robots\.txt/),
            handler: "CacheFirst",
        },
        {
            urlPattern: new RegExp(/logo\.192\.png/),
            handler: "CacheFirst",
        },
        {
            urlPattern: new RegExp(/logo\.512\.png/),
            handler: "CacheFirst",
        },
        {
            urlPattern: new RegExp(/favicon\.ico/),
            handler: "CacheFirst",
        },
        {
            urlPattern: new RegExp(/robots\.txt/),
            handler: "CacheFirst",
        }],
})