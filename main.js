const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      products: [
        {
          name: "Green Socks",
          description: "They've seen things.",
          details: ["50% cotton", "30% wool", "20% polyester"],
          image: "./assets/images/socks_green.jpg",
          inStock: 50,
          isOnSale: true,
        },
        {
          name: "Blue Socks",
          description: "They've been places.",
          details: ["50% cotton", "30% wool", "20% polyester"],
          image: "./assets/images/socks_blue.jpg",
          inStock: 8,
          isOnSale: false,
        },
      ],
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
  },
});
