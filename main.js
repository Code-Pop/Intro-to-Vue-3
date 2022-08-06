const app = Vue.createApp({
    data: function() {
        return {
            product: {
                title: 'Socks',
                description: 'Nice socks!',
                image: './assets/images/socks_green.jpg',
                url: 'https://github.com/JamesASchulze/Intro-to-Vue-3/blob/master/assets/images/socks_green.jpg',
                inventory: 9,
                onSale: true
            }
        }
    }
})
