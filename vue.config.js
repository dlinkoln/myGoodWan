const webpack = require('webpack');

module.exports = {
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
            })],
    },
    lintOnSave: false,
    publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
};
