const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      image: "./assets/images/socks_blue.jpg",
      inStock: true,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        { key: "12345", color: "blue" },
        { key: "123234", color: "green" },
      ],
      sizes: ["34-38", "38-42", "42-46"],
    };
  },
});
