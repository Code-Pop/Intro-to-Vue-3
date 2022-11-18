// const product = 'Socks'

const app = Vue.createApp({
    data() {                //ES6 Shorthand for data: () => {
        return {
            cart: 0,
            product: 'Socks',
            brand: 'Vue Mastery',
            image: './assets/images/socks_green.jpg',
            url: 'https://static.nrdbassets.com/v1/large/30001.jpg',
            inventory: 10,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' }
            ],
            sizes: ['S', 'M', 'L', 'XL']
        }
    },
    methods: {
        addToCart() {
            this.cart += 1;
            this.inventory > 0 ? this.inventory -= 1 : this.inventory = 0
        },
        removeFromCart() {
            if (this.cart > 0) {
                this.cart -= 1
                this.inventory += 1;
            }
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