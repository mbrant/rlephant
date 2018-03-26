import webpack from 'webpack'
import path from 'path'
import 'babel-polyfill'

const config = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: [
        'webpack-hot-middleware/client?reload=true', 'babel-polyfill', path.resolve(__dirname, './src/index')
    ],
    target: 'web',
    output: {
        path: path.resolve(__dirname, './src'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }, {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            }, {
                test: /\.(sass|scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }, {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['url-loader']
            }, {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['url-loader']
            }
        ]
    }
}
module.exports = config