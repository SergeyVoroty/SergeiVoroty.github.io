const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const pug = {
    test: /\.pug$/,
    use: ['html-loader', 'pug-html-loader']
};
module.exports = {
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
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({template: "./src/index.pug"})
    ]
}