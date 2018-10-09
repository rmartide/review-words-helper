const path = require('path');

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                "@components": path.resolve(__dirname, 'src/components'),
                "@services": path.resolve(__dirname, 'src/services')
            }
        }
    }
}