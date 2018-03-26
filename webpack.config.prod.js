import webpack from 'webpack'
import path from 'path'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import UglifyJsPlugin from 'uglifyjs-webpack-plugin'

const GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify('production')
}

const config = {
    mode: 'production',
    devtool: 'source-map',
    entry: [path.resolve(__dirname, './src/index.js')],
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.DefinePlugin(GLOBALS),
        new MiniCssExtractPlugin({filename: 'style.css'}),
        new UglifyJsPlugin({sourceMap: true})
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }, {
                test: /\.(css|scss|sass)$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['url-loader']
            }, {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }
        ]
    }
}
module.exports = config