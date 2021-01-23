app.component("product-details", {
  props: {
      details: {
          type: Array,
          required: false,
      }
  },

  template:
    /*html*/
    `<div class="product-details">
        <ul>
            <li v-for="detail in details" :key="detail">
                {{ detail }}
            </li>
        </ul>
    </div>`,
});
