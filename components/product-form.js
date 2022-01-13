app.component("product-form", {
  template: `
 
 <form @submit.prevent="onSubmit">
  <div>
  <input type="text" placeholder="name" v-model="product.name">
  <input type="text" placeholder="color" v-model="product.color">
  <input type="number" placeholder="size" v-model="product.size">
  <button >Add </button>
</div>
</form>
  `,
  data() {
    return {
      product: {
        name: "Cool",
        color: "testtt",
        size: 010,
      },
    };
  },
  methods: {
    onSubmit() {
      this.$emit("onaddingproduct", this.product);
    },
  },
});
