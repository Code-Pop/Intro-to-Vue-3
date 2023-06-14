const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'bloo' },
                { id: 2235, color: 'fenk' }
            ],
            sizes: ['Small', 'Medium', 'Large'],
            genders: [
                { id: 5246, value: 'Male' },
                { id: 5247, value: 'Female' },
                { id: 5248, value: 'Non-Binary' }
            ]
        }
    }
})
