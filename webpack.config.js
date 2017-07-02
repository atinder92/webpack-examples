var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry   :{
        bundle : ['./js/app.js','./js/utils.js'],
        page1  : './js/page1.js',
        page2  : './js/page2.js'

    },
    output  : {
        filename: "build/js/[name].js"

    },

    module : {
        rules:[
            {
            test    : /\.css$/,
            exclude : /node_modules/,
            use     : ["style-loader","css-loader"]

            },
            {
            test    : /\.less$/,
            exclude : /node_modules/,
            use     : ["style-loader","css-loader","less-loader"]
            }
        ]

    }



}

