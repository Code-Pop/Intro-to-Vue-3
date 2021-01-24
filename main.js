const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: true,
    };
  },
  methods: {
    addToCart(variantIndex) {
      this.cart.push(variantIndex);
    },
    removeFromCart(variantIndex) {
      idx = this.cart.indexOf(variantIndex);
      this.cart.splice(idx, 1);
    },
  },
  computed: {},
});
