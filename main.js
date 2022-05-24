const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inventory: 50,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% Polyester'],
            variants: [
                { id: 2234, color: 'green'},
                { id: 2235, color: 'blue'},
            ],
            sizes: [
                { id: 22340, size: 'S'},
                { id: 22341, size: 'M'},
                { id: 22342, size: 'L'},
            ]

        }
    }
})
