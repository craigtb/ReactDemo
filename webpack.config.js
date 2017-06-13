var path = require('path');
var buildPath = path.resolve(__dirname, 'src', 'main', 'resources', 'static', 'js');
var mainPath = path.resolve(__dirname, 'app', 'App.jsx');

var config = {
    devtool: 'inline-source-map',
    entry: [mainPath],
    output: {
        path: buildPath,
        filename: 'app2.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    watch:false
};

module.exports = config;