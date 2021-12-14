const path = require('path');

module.exports = {
    entry: ['./script/index.js', './script/login.js'],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'docs'),
    },
    mode: 'development',
    watch: true
};;