/*
 * @Author: your name
 * @Date: 2022-02-13 00:48:05
 * @LastEditTime: 2022-02-13 00:50:02
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \项目\春阳tree\tree\vue.config.js
 */
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views',
        'utils':'@/utils',
        'constant': '@/constant'
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