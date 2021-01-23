const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      products: [
        {
          name: "Socks",
          description: "Fresh out of the oven.",
          details: ["50% cotton", "30% wool", "20% polyester"],
          image: "./assets/images/socks_green.jpg",
          inStock: 50,
          isOnSale: true,
          variants: [
            { color: "blue", image: "./assets/images/socks_blue.jpg" },
            { color: "green", image: "./assets/images/socks_green.jpg" },
          ],
        },
      ],
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    setProductImage(relevantProduct, variantImage) {
      this.products.find(
        (product) => product === relevantProduct
      ).image = variantImage;
    },
  },
});
