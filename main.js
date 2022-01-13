const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      product: "Socks",
      img: "./assets/images/socks_blue.jpg",
      selectedColor: "blue",

      products: [
        {
          name: "prod 1",
          color: "green",
          size: "3x",
        },
        {
          name: "prod 2",
          color: "blue",
          size: "Mx",
        },
      ],
    };
  },
  methods: {
    changeImg(color) {
      this.selectedColor = color;
    },
    increasingCounter(num) {
      this.counter = this.counter + num;
    },
    addingProduct(prod) {
      console.log(prod);
      //let product = null;
      let product = [];
      product.name = prod.name;
      product.color = prod.color;
      product.size = prod.size;
      this.products.push(product);
    },
  },
});
