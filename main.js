const app = Vue.createApp({
  data() {
    return ({
      cart: [],
      premium: false,
    });
  },
  methods: {
    addToCart(productId) {
      this.cart.push(productId);
    },
    removeFromCart(productId) {
      this.cart = this.cart.filter((product) => product != productId);
    },
  },
});
