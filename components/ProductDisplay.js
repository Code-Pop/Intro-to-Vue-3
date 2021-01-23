app.component("product-display", {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template:
    /*html*/
    `<div class="product-display">
        <div
          v-for="(product, productIndex) in products"
          :key="productIndex"
          class="product-container"
        >
          <div class="product-image">
            <img
              :src="getImage(productIndex, product.selectedVariantIndex)"
              :alt="product.name"
            />
          </div>
          <div class="product-info">
            <h1>{{ title(product) }}</h1>
            <p>{{ product.description }}</p>
            <p>Shipping: {{ getShippingPrice }}</p>
            <div class="product-additional-info">
              <p
                v-if="getQuantity(productIndex, product.selectedVariantIndex) > 10"
              >
                In stock
              </p>
              <p
                v-else-if="getQuantity(productIndex, product.selectedVariantIndex)"
              >
                Only
                {{ getQuantity(productIndex, product.selectedVariantIndex) }}
                left!
              </p>
              <p v-else>Out of stock</p>

              <p v-show="product.isOnSale">On Sale!</p>
            </div>
            <product-details :details="product.details"></product-details>
          </div>
          <div class="product-variants">
            <ul>
              <li
                v-for="(variant, variantIndex) in product.variants"
                :key="variant"
                @mouseover="selectVariant(productIndex, variantIndex)"
                class="color-circle"
                :style="{backgroundColor: variant.color}"
              ></li>
            </ul>
          </div>
          <button
            @click="addToCart"
            :disabled="!getQuantity(productIndex, product.selectedVariantIndex)"
            :class="[{ disabledButton: !getQuantity(productIndex, product.selectedVariantIndex) }, 'button']"
          >
            Add to cart!
          </button>
        </div>
    </div>`,

  data() {
    return {
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
    getShippingPrice() {
      return this.premium ? "Free" : 2.99;
    },
  },
});
