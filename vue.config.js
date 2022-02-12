module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views',
        'utils':'@/utils'
      }
    },
    externals:{
      'BMap': 'BMap',
      'BMap_Symbol_SHAPE_POINT':'BMap_Symbol_SHAPE_POINT'
    }
  }
  // ,
  // devServer: {
  //   proxy: {
  //       '/api': {
  //           // 此处的写法，目的是为了 将 /api 替换成 https://www.baidu.com/
  //           target: 'http://x3yjp6.natappfree.cc',
  //           // 允许跨域
  //           changeOrigin: true,
  //           ws: true,
  //           pathRewrite: {
  //               '^/api': ''
  //           }
  //       }
  //   }
  // }
}