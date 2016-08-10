var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: path.join(__dirname, 'src'),
        vendors: ['react', 'redux']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    devServer: {
        // historyApiFallback: true,
        hot: true,
        inline: true,
        // progress: true,
        port: 9000
    },
    devtool: 'sourcemap',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel?presets[]=es2015&presets[]=react&plugins[]=transform-runtime&plugins[]=syntax-async-functions&plugins[]=syntax-decorators'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style", "css!sass")
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style", "css")
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
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
        new ExtractTextPlugin('[name].css'),
        new HtmlwebpackPlugin({
            title: 'Hello app',
            // filename: 'index.html',
            template:'index.html',
            chunks: ['vendors', 'app'],
            inject: 'body'
        })
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     },
        //     minimize: true
        // })
    ]
};
