const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            description: 'Warms your feet.',
            image: './assets/images/socks_blue.jpg',
            url: '',
            inventory: 100,
            onSale: true,
        }
    }
});
