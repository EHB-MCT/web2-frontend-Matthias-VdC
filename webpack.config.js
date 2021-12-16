const path = require('path');

module.exports = {
    entry: {
        index: "./script/index.js",
        input: "./script/login.js"
    },
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'main.js'
    },
    mode: 'development'
};;