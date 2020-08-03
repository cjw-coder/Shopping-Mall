const path = require('path');
function resolve(dir){
    return path.join(__dirname,dir)
}
module.exports = {
    configureWebpack:{
        resolve:{
            alias:{
                '@':resolve('src'),
                'components':'@/components',
                'views':'@/views',
                'assets':'@/assets',
                'network':'@/network',
                'common':'@/common'
            }
        }
    }
    /*
    chainWebpack:(config)=>{
        config.resolve.alias
        .set('components',resolve('src/components'))
        .set('views',resolve('src/views'))
        .set('assets',resolve('src/assets'))
        .set('network',resolve('src/network'))
        .set('common',resolve('src/common'))
    }*/
}