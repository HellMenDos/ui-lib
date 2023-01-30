const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
   entry: path.resolve(__dirname, './src/index.ts'),
   output: {
       path: path.resolve(__dirname, './dist'),
       filename: 'index.js',
       library: 'ui-lib',
       libraryTarget: 'umd'
   },
   externals: [nodeExternals()],
   module: {
    rules: [
        {
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [['@babel/preset-env',{ targets: "defaults" }], ['@babel/preset-react',{runtime:"automatic"}]]
                }
            }
        },
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
    ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
};