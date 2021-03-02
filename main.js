const app = Vue.createApp({
  data() {
    return {
      product: 'Socks'
    }
  }
})

const mountedApp = app.mount('#app')
