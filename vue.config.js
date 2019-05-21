module.exports =  {
  devServer: {
      proxy: {
        // 配置多个代理(配置一个 proxy: 'http://localhost:4000' )
          '/api': {
            target: "http://m.you.163.com",
              ws: true,
              changeOrigin: true,
              pathRewrite: {
              "^/api": "" //请求的时候使用这个api就可以
              }
          }
        }
  }
}
