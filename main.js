const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      productDescription:
        "Comfortable socks built with resistant and breathable material ",
      image: "./assets/images/socks_green.jpg",
      url: "https://www.amazon.com/socks/s?k=socks",
      inStock: true,
      inventory: 0,
      onSale: true,
    };
  },
});
