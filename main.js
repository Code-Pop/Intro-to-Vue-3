const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', availableSizes: [5,7,8,9,10] },
                { id: 2235, color: 'blue', availableSizes: [5,6,8,10,11] },
            ]
        }
    }
})
