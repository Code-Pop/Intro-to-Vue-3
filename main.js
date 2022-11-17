// const product = 'Socks'

const app = Vue.createApp({
    data() {                //ES6 Shorthand for data: () => {
        return {
            product: 'Socks',
            description: 'Green and Soft',
            image: './assets/images/socks_green.jpg',
            url: 'https://static.nrdbassets.com/v1/large/30001.jpg',
            inventory: 100,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester']
        }
    }
})