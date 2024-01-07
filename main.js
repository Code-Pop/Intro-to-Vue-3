const app = Vue.createApp({
    data() {
        return ({
            cart: 0,
            product: 'Socks',
            brand: 'Vue Mastery',
            description: 'Warms your feet.',
            url: '',
            selectedVariant: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { 
                id: 2234,
                color: 'green',
                image: './assets/images/socks_green.jpg',
                quantity: 50,
              },
              {
                id: 2235,
                color: 'blue',
                image: './assets/images/socks_blue.jpg',
                quantity: 0,
              },
            ],
            onSale: true,
            sizes: [35, 36, 37, 38, 39, 40],
        });
    },
    methods: {
      addToCart() {
        this.cart += 1;
      },
      removeFromCart() {
        if (this.cart > 0) this.cart -= 1;
      },
      updateVariant(index) {
        this.selectedVariant = index;
      },
    },
    computed: {
      title() {
        return this.brand + ' ' + this.product + (this.onSale ? ' is on sale' : '');
      },
      image() {
        return this.variants[this.selectedVariant].image;
      },
      inventory() {
        return this.variants[this.selectedVariant].quantity;
      },
    }
});
