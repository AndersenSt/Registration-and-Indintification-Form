'use strict';

const path = require('path');

module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'react-hot-loader' },
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'react', 'stage-2']
                        }
                    }
                ]
            },
            {
                test: /\.css?$/,
                loaders: ['style-loader', 'css-loader']
            }
        ]
    },

    devtool: 'source-map',

    devServer: {
        historyApiFallback: true
    },

    resolve: {
        extensions: ['.js', '.jsx', '.json', '*']
    }
};