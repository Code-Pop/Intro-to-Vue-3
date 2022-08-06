const app = Vue.createApp({
    data: function() {
        return {
            product: {
                title: 'Socks',
                description: 'Super duper, nice socks!',
                image: './assets/images/socks_green.jpg',
                url: 'https://github.com/JamesASchulze/Intro-to-Vue-3/blob/master/assets/images/socks_green.jpg',
                inventory: 9,
                onSale: true,
                details: ['50% cotton','30% wool','20% polyester'],
                variants: [
                    { id: 2234, color: 'green' },
                    { id: 2235, color: 'blue' }
                ],
                sizes: [
                    'Large',
                    'Medium',
                    'small'
                ]
            }
        }
    }
})
