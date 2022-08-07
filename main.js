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
                    { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
                    { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' }
                ],
                sizes: [
                    'Large',
                    'Medium',
                    'small'
                ]
            },
            cart: 0
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        removeFromCart() {
            if(this.cart >= 1) {
                this.cart -= 1
            }
        },
        updateImage(variantImage) {
            this.product.image = variantImage
        }
    }
})
