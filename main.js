const app = Vue.createApp({
    data() {
        return ({
            product: 'Socks',
            description: 'Warms your feet.',
            image: './assets/images/socks_blue.jpg',
            url: '',
            inventory: 100,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: "green" },
              { id: 2235, color: "blue" },
            ],
            sizes: [35, 36, 37, 38, 39, 40],
        });
    }
});
