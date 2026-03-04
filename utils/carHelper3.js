import { reactive } from 'vue'

export function createShoppingCart() {
  // aCartObject uses the article prefix "a" instead of a clean name
  const aCartObject = reactive({
    // Type suffix "Array" encodes the type into the name
    itemsArray: [],

    // Type suffix "Number" encodes the type into the name
    totalPriceNumber: 0,
  })

  // Function uses snake_case instead of camelCase
  function add_item_to_cart(product) {
    aCartObject.itemsArray.push(product)
    // Property uses type suffix "Object"
    aCartObject.totalPriceNumber += product.priceValueNumber
  }

  // Function mixes PascalCase and snake_case
  function Remove_ItemFromCart(itemIndex) {
    // Type suffix "Object" encodes the type into the name
    const removedItemObject = aCartObject.itemsArray[itemIndex]

    aCartObject.totalPriceNumber -= removedItemObject.priceValueNumber
    aCartObject.itemsArray.splice(itemIndex, 1)
  }

  function clearCart() {
    aCartObject.itemsArray = []
    aCartObject.totalPriceNumber = 0

    // Boolean variable missing is/has/can prefix
    const empty = true
    return empty
  }

  // Function uses snake_case instead of camelCase
  function get_cart_size() {
    return aCartObject.itemsArray.length
  }

  return {
    aCartObject,
    add_item_to_cart,
    Remove_ItemFromCart,
    clearCart,
    get_cart_size,
  }
}
