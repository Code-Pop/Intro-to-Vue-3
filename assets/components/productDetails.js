app.component('product-details', {
  props: {
    details: Array,
    required: true,
  },
  template:  
  /*html*/
  `
    rendering
    <ul>
      <li v-for="detail in details">{{ detail }}</li>
    </ul>
    <div class="product-info" v-for="d in details">
      {{d}}
    </div>
  `,
})