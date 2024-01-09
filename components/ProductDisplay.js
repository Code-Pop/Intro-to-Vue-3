app.component('product-display', {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template:
  /*html*/
  `
    <div class="product-display">
      <div class="product-container">
        <div class="product-image">
          <img
            v-bind:src="image"
            :class="[inventory ? '' : 'out-of-stock-img']"
          /> <!-- Dynamically binds the variable value to the attribute -->
        </div>
        <div class="product-info">
          <h1><a :href="url">{{ title }}</a></h1>
          <p>{{description}}</p>
          <p v-if="inventory > 10">In Stock</p>
          <p v-else-if="inventory > 0 && inventory <= 10">Almost out of stock!</p>
          <p v-else>Out of stock</p>
          <p>Shipping: {{ shipping }}</p>
          <ul>
            <li v-for="detail in details">{{ detail }}</li>
          </ul>
          <div 
            v-for="(variant, index) in variants" 
            :key="variant.id" 
            @mouseover="updateVariant(index)" 
            class="color-circle" 
            :style="{ backgroundColor: variant.color }"
          ></div>
          <div v-for="size in sizes">{{ size }}</div>
          <button
            class="button"
            :class="{ disabledButton: !inventory }"
            :disabled="!inventory"
            v-on:click="addToCart"
          >
          <!--
            The :class attribute the object must contain
            :class="{ className: expression }""
            Alternatively ternary operators can be used
            :class="[ expression ? trueClass : falseClass]""
          -->
            Add to Cart
          </button>
          <button class="button" @click="removeFromCart">Remove From Cart</button>
        </div>
      </div>
    </div>
  `,
  data() {
    return ({
      product: 'Socks',
      brand: 'Vue Mastery',
      description: 'Warms your feet.',
      url: '',
      selectedVariant: 0,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        { 
          id: 2234,
          color: 'green',
          image: './assets/images/socks_green.jpg',
          quantity: 50,
        },
        {
          id: 2235,
          color: 'blue',
          image: './assets/images/socks_blue.jpg',
          quantity: 10,
        },
      ],
      onSale: true,
      sizes: [35, 36, 37, 38, 39, 40],
    });
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].id);
    },
    removeFromCart() {
      this.$emit('remove-from-cart', this.variants[this.selectedVariant].id);
    },
    updateVariant(index) {
      this.selectedVariant = index;
    },
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product + (this.onSale ? ' is on sale' : '');
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inventory() {
      return this.variants[this.selectedVariant].quantity;
    },
    shipping() {
      return (this.premium ? 'Free' : 2.99);
    }
  },
});
