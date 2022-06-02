const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    workboxOptions: {
      // https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin
      skipWaiting: true,  //  使Service Worker在install后立刻进入activating状态，立即获得页面控制权
      clientsClaim: true, //  强制等待中的 Service Worker 被激活
      navigateFallback: '/'
    }
  }
})
