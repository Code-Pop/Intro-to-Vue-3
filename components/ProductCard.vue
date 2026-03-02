<template>
  <!-- The root div element that wraps the entire product card component -->
  <div class="product-card">
    <!-- Display the product image using an img tag -->
    <!-- The src attribute is bound to the productImageSourceUrl computed property -->
    <!-- The alt attribute provides alternative text for accessibility -->
    <img
      :src="productImageSourceUrl"
      :alt="theProductObject.nameOfTheProduct"
      class="product-card__image"
    />

    <!-- A div container that holds all the product information text -->
    <div class="product-card__info-container">
      <!-- Display the name of the product in an h2 heading element -->
      <h2 class="product-card__name-heading">{{ theProductObject.nameOfTheProduct }}</h2>

      <!-- Display the price of the product formatted as currency -->
      <!-- The formattedProductPriceString computed property formats the price -->
      <p class="product-card__price-paragraph">{{ formattedProductPriceString }}</p>

      <!-- Display the product description text in a paragraph element -->
      <p class="product-card__description-paragraph">
        {{ theProductObject.descriptionOfTheProduct }}
      </p>
    </div>

    <!-- A div container that holds the action buttons for the product card -->
    <div class="product-card__buttons-container">
      <!-- The add to cart button that triggers the handleAddToCartButtonClick method -->
      <!-- The button is disabled when the product is out of stock -->
      <button
        class="product-card__add-to-cart-button"
        :disabled="theProductObject.isCurrentlyOutOfStock"
        @click="handleAddToCartButtonClick"
      >
        <!-- Show different button text depending on whether the product is in stock -->
        <!-- If out of stock, show 'Out of Stock', otherwise show 'Add to Cart' -->
        {{ theProductObject.isCurrentlyOutOfStock ? 'Out of Stock' : 'Add to Cart' }}
      </button>
    </div>
  </div>
</template>

<script>
// Import the computed function from the Vue library to create computed properties
import { computed } from 'vue'

// Export the component options object as the default export of this file
export default {
  // Set the name of the component to 'ProductCard'
  name: 'ProductCard',

  // Define the props that this component accepts from its parent component
  props: {
    // The theProductObject prop holds all the data about the product to display
    // It is required because the component cannot function without product data
    theProductObject: {
      // The type of this prop is Object because it contains multiple product properties
      type: Object,
      // Mark this prop as required so Vue will warn if it is not provided
      required: true,
    },
  },

  // Define the events that this component can emit to its parent component
  emits: [
    // The 'add-to-cart' event is emitted when the user clicks the add to cart button
    'add-to-cart',
  ],

  // The setup function is the entry point for the Composition API
  // It receives props and context as arguments
  setup(props, { emit }) {
    // Create a computed property for the product image source URL
    // This computed property returns the URL of the product image
    const productImageSourceUrl = computed(() => {
      // Return the image URL from the product object
      // The image URL is stored in the imageUrl property of the product object
      return props.theProductObject.imageUrl
    })

    // Create a computed property for the formatted product price string
    // This computed property formats the price as a currency string
    const formattedProductPriceString = computed(() => {
      // Format the price using the Intl.NumberFormat API
      // The 'en-US' locale formats numbers in the United States format
      // The 'currency' style adds a currency symbol and formats the number as money
      // The 'USD' currency code uses the US Dollar symbol
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(props.theProductObject.theProductPrice)
    })

    // Define the function that handles the add to cart button click event
    // This function is called when the user clicks the add to cart button
    function handleAddToCartButtonClick() {
      // Emit the 'add-to-cart' event with the product object as the payload
      // The parent component will listen for this event and handle the logic
      emit('add-to-cart', props.theProductObject)
    }

    // Return all the reactive data and functions so the template can access them
    // Any value not returned here will not be accessible in the template
    return {
      productImageSourceUrl,
      formattedProductPriceString,
      handleAddToCartButtonClick,
    }
  },
}
</script>
