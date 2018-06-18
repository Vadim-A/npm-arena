const path = require('path');

module.exports = {
    entry: './src/lesson 2/app.js',
        output: {
            filename : 'bundle.js',
            path : path.resolve(__dirname, 'publish'),
        }
}