app.component("app-products", {
  props: { text: { type: String, required: true } },
  template: ` <h1>{{text}}</h1>
  <button  @click="addCounter()" > adding Number</button>
  `,
  methods: {
    addCounter() {
      this.$emit("adding", 3);
    },
  },
});
