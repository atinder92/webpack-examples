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
            test    :/\.js$/,
            exclude :/node_modules/,
            enforce: "pre",
            loader  :'jshint-loader'

             }
        ],
        rules:[
            {
                test    : /\.js$/,
                exclude : /node_modules/,
                loader  : "babel-loader"

            }
        ]

    }



}

