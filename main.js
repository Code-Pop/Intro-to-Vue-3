// Vue is reactive and auto updates when changes are made

const app = Vue.createApp({
    data() {
        return{
            product: 'Socks',
            description: 'A product that covers your feet so that you can wear shoes over them and prevent stinkiness.'
        }
    }
})
