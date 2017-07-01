module.exports = {
    entry   :["./app.js","./utils.js"],
    output  : {
        filename:"bundle.js"

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

