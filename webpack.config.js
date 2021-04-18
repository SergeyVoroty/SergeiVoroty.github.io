const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const pug = {
    test: /\.pug$/,
    use: ['html-loader', 'pug-html-loader']
}
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
    context: path.resolve(__dirname),
    mode: "development",
    entry: './src/app.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            pug,
            {
                test: /\.(sass|css|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|svg|gif|ttf|woff)$/,
                use: [
                    'file-loader'
                ]
            },
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({template: "./src/index.pug", minify: false}),
        new CleanWebpackPlugin()
    ]
}