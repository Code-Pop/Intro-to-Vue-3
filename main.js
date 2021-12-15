const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Retran 5K',
            brand: 'Volcam',
            // onSale: true,
            selectedVariant: 0,
            details: ['Modern Fit', 'Rib at waist', 'Water resistan'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/green_jacket.jpeg', quantity: 15, sale: true},
              { id: 2235, color: 'black', image: './assets/images/black_jacket.jpeg', quantity: 0, sale: false},
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateVariant(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        saleMessage() {
            if (this.onSale) {
                return 'On sale now!'
            } else {
                return 'The sale has been ended'
            }
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        onSale() {
            return this.variants[this.selectedVariant].sale
        }
    }
})