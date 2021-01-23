const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      products: [
        {
          name: "Socks",
          brand: "VueStuff",
          description: "Fresh out of the oven.",
          details: ["50% cotton", "30% wool", "20% polyester"],
          image: "./assets/images/socks_green.jpg",
          inStock: 50,
          isOnSale: true,
          variants: [
            {
              color: "blue",
              image: "./assets/images/socks_blue.jpg",
              quantity: 50,
            },
            {
              color: "green",
              image: "./assets/images/socks_green.jpg",
              quantity: 0,
            },
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
  computed: {
    title() {
      // Well, I should learn how to use computed values with arguments
      return `${this.products[0].brand} ${this.products[0].name}`;
    },
  },
});
