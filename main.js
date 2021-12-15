const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Retran 5K',
            brand: 'Volcam',
            image: './assets/images/green_jacket.jpeg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/green_jacket.jpeg' },
              { id: 2235, color: 'black', image: './assets/images/black_jacket.jpeg' },
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateImage(variantImage) {
            this.image = variantImage
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        }
    }
})