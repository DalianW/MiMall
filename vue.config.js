module.exports = {
  devServer:{
    open: true,
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://mall-pre.springboot.cn',
        changeOrigin: true,
        pathRewrite:{
          '/api':''
        }
      }
    }
  },
  // lintOnSave: true,
  // publicPath: '/',
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.plugins.delete('prefetch')
  }
}