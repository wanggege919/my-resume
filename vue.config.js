module.exports  = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/my-resume/dist/'
    : '/',
    configureWebpack:{
        resolve:{
            alias:{
                "css":"@/common/css",
                "js":"@/common/js"
            }
        }
    },
    css:{
        sourceMap:true,
        loaderOptions:{
            sass:{
                sourceMap:true
            }
        }
    }
}