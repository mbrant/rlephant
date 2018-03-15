import webpack from 'webpack'
import path from 'path'

const config = {
    devtool: 'inline-source-map',
    entry: [
        path.resolve(__dirname, 'app/main')
    ],
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [],
    module: {
        rules: [
            {test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
            {test: /\.css$/, loader: ['style-loader', 'css-loader']}
        ]
    }
}
module.exports = config 