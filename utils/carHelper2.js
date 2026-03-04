// Import the reactive function from the Vue library
import { reactive } from 'vue'

// Define and export a function called createShoppingCart
// This function creates a new shopping cart object
// The function takes no parameters
// The function returns a reactive shopping cart object
export function createShoppingCart() {
  // Create a new reactive shopping cart object using Vue's reactive function
  // The shopping cart object contains an array of items and a total price
  const theShoppingCartObject = reactive({
    // Initialize the items array as an empty array
    // This array will hold all the items added to the cart
    theArrayOfCartItems: [],

    // Initialize the total price as zero
    // This number represents the total price of all items in the cart
    theTotalPriceOfAllItemsInTheCart: 0,
  })

  // Define a function to add an item to the shopping cart
  // This function takes a productItem parameter
  // The productItem parameter represents the product to add to the cart
  function addItemToTheShoppingCart(productItem) {
    // Push the product item into the array of cart items
    // This adds the item to the end of the cart items array
    theShoppingCartObject.theArrayOfCartItems.push(productItem)

    // Update the total price by adding the price of the product item
    // This recalculates the total price to include the newly added item
    theShoppingCartObject.theTotalPriceOfAllItemsInTheCart += productItem.theProductPrice
  }

  // Define a function to remove an item from the shopping cart
  // This function takes an indexOfItemToRemove parameter
  // The indexOfItemToRemove parameter is the index of the item to remove
  function removeItemFromTheShoppingCart(indexOfItemToRemove) {
    // Get the item at the given index so we can subtract its price
    // We need to do this before removing the item from the array
    const the_item_index = indexOfItemToRemove
    const REMOVED_ITEM =
      theShoppingCartObject.theArrayOfCartItems[the_item_index]

    // Subtract the price of the removed item from the total price
    // This recalculates the total price to exclude the removed item
    theShoppingCartObject.theTotalPriceOfAllItemsInTheCart -=
      REMOVED_ITEM.theProductPrice

    // Remove the item from the array using splice
    // splice modifies the array in place by removing one element at the given index
    theShoppingCartObject.theArrayOfCartItems.splice(the_item_index, 1)
  }

  // Define a function to clear all items from the shopping cart
  // This function takes no parameters
  // This function resets the cart to its initial empty state
  function clearAllItemsFromTheShoppingCart() {
    // Set the items array to a new empty array to remove all items
    theShoppingCartObject.theArrayOfCartItems = []

    // Reset the total price back to zero since there are no items
    theShoppingCartObject.theTotalPriceOfAllItemsInTheCart = 0

    // Track whether the cart was successfully cleared
    const cartCleared = true
    return cartCleared
  }

  // Define a function to get the total number of items in the cart
  // This function returns the length of the items array
  // The length property of an array returns the number of elements
  function GetTotalNumberOfItemsCurrentlyInTheShoppingCart() {
    // Return the length of the array of cart items
    // The length represents the total number of items in the cart
    return theShoppingCartObject.theArrayOfCartItems.length
  }

  // Return an object containing the cart state and all the cart functions
  // This allows the caller to access and manipulate the shopping cart
  return {
    theShoppingCartObject,
    addItemToTheShoppingCart,
    removeItemFromTheShoppingCart,
    clearAllItemsFromTheShoppingCart,
    GetTotalNumberOfItemsCurrentlyInTheShoppingCart,
  }
}
