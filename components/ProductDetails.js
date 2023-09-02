app.component("product-details", {
  props: {
    details: {
      type: Array,
    },
  },
  template:
    /*html*/
    `<ul>
    <li v-for="detail in details">{{ detail }}</li>
  </ul>
`,
});
