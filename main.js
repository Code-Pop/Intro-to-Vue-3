const app = Vue.createApp({
    data: function() {
        return {
            cart: 0,
            product: {
                title: 'Super Duper Socks',
                description: 'Super duper, nice socks!',
                brand: 'James\'',
                url: 'https://github.com/JamesASchulze/Intro-to-Vue-3/blob/master/assets/images/socks_green.jpg',
                onSale: true,
                details: ['50% cotton','30% wool','20% polyester'],
                variants: [
                    { 
                        id: 2234,
                        color: 'green',
                        image: './assets/images/socks_green.jpg',
                        quantity: 42,
                        product: 'Green Socks' 
                    },
                    {
                        id: 2235,
                        color: 'blue',
                        image: './assets/images/socks_blue.jpg',
                        quantity: 0,
                        product: 'Blue Socks' 
                    }
                ],
                sizes: [
                    'Large',
                    'Medium',
                    'small'
                ]
            },
            selectedVariant: 0
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
        updateVariant(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        image() {
            return this.product.variants[this.selectedVariant].image
        },
        inStock() {
            return this.product.variants[this.selectedVariant].quantity
        },
        onSaleNote() {
            const brand = this.product.brand;
            const { product } = this.product.variants[this.selectedVariant];
            return `${brand} ${product} is on sale!`
        }
    }
})
