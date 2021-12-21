const path = require('path');

module.exports = {
    entry: {
        index: "./script/index.js",
        login: "./script/login.js",
        search: "./script/search.js",
        loggedin: "./script/loggedin.js",
    },
    output: {
        path: path.resolve(__dirname, 'docs'),
        //Changed filename to avoid conflicts  src: https://stackoverflow.com/questions/42148632/conflict-multiple-assets-emit-to-the-same-filename
        filename: '[name].js'
    },
    mode: 'development'
};