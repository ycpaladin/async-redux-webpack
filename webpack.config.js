var path = require('path');
var webpack = require('webpack');
// var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
    entry: {
        app: path.join(__dirname, 'src'),
        vendors: ['react', 'redux']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                // include: path.join(__dirname, 'public/app'),
                // loaders: ['babel'],
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                loader: [
                    {
                        test: /\.css$/,
                        loader: 'style!css'
                    }
                ]
            },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
        ]
    },
    plugins: [
        // new webpack.DefinePlugin({
        //     __DEBUG__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
        // }),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     },
        //     minimize: true
        // })
    ]
};
