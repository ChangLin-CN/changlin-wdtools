const path = require('path')
const webpack = require('webpack')
module.exports = {
    devtool:false,
    entry:{
        index:path.join(__dirname,"src/index.js")
    },
    output:{
        path:path.resolve(__dirname,'./umd'),
        filename:'wdtools.js',
        libraryTarget:'umd',
        library: "wdtools"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, "node_modules"),
                use: {
                    loader: 'babel-loader'
                },
            }
        ]
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
}