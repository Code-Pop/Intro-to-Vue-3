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
          selectedVariantIndex: 0,
          isOnSale: true,
          variants: [
            {
              color: "blue",
              image: "./assets/images/socks_blue.jpg",
              quantity: 8,
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
    title(product) {
      return `${product.brand} ${product.name}`;
    },
    selectVariant(productIndex, variantIndex) {
      this.products[productIndex].selectedVariantIndex = variantIndex;
    },
    getImage(productIndex, variantIndex) {
      return this.products[productIndex].variants[variantIndex].image;
    },
    getQuantity(productIndex, variantIndex) {
      return this.products[productIndex].variants[variantIndex].quantity;
    },
  },
  computed: {
    1: 1,
  },
});
