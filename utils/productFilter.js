/**
 * productFilter.js
 *
 * This file contains utility functions for filtering products.
 * These functions are used to filter products based on various criteria.
 * Import these functions where you need to filter products.
 */

/**
 * filterProductsByCategory - Filters products by category
 *
 * This function takes an array of product objects and a category string.
 * It filters the array to only include products that match the given category.
 * It returns a new array containing only the matching products.
 *
 * @param {Array} theArrayOfAllProducts - The array of all products to filter
 * @param {string} theCategoryStringToFilterBy - The category string to filter by
 * @returns {Array} A new array of products that match the given category
 */
export function filterProductsByCategory(theArrayOfAllProducts, theCategoryStringToFilterBy) {
  // Use the filter method to create a new array with only matching products
  // The filter method iterates over each element and keeps elements where the callback returns true
  const theFilteredArrayOfProductsMatchingTheCategory = theArrayOfAllProducts.filter(
    // For each product in the array, check if its category matches the given category
    (eachIndividualProductObject) => {
      // Compare the product's category property to the category we are filtering by
      // Return true if they match, false otherwise
      return eachIndividualProductObject.category === theCategoryStringToFilterBy
    }
  )

  // Return the filtered array of products
  return theFilteredArrayOfProductsMatchingTheCategory
}

/**
 * filterProductsByPriceRange - Filters products within a price range
 *
 * This function accepts an array of products and a minimum and maximum price.
 * It returns only the products whose price falls within the specified range.
 * Both the minimum and maximum values are inclusive.
 *
 * @param {Array} theArrayOfAllProducts - The array of all products to filter
 * @param {number} theMinimumPriceValue - The minimum price (inclusive)
 * @param {number} theMaximumPriceValue - The maximum price (inclusive)
 * @returns {Array} A new array of products within the price range
 */
export function filterProductsByPriceRange(
  theArrayOfAllProducts,
  theMinimumPriceValue,
  theMaximumPriceValue
) {
  // Filter the products array to only include products within the price range
  const theFilteredArrayOfProductsWithinThePriceRange = theArrayOfAllProducts.filter(
    (eachIndividualProductObject) => {
      // Check that the product price is greater than or equal to the minimum price
      const isProductPriceAboveOrEqualToMinimumPrice =
        eachIndividualProductObject.price >= theMinimumPriceValue

      // Check that the product price is less than or equal to the maximum price
      const isProductPriceBelowOrEqualToMaximumPrice =
        eachIndividualProductObject.price <= theMaximumPriceValue

      // Return true only if both conditions are true (price is within range)
      return isProductPriceAboveOrEqualToMinimumPrice && isProductPriceBelowOrEqualToMaximumPrice
    }
  )

  // Return the array of products that are within the given price range
  return theFilteredArrayOfProductsWithinThePriceRange
}

/**
 * sortProductsByPriceAscending - Sorts products from lowest to highest price
 *
 * This function takes an array of product objects.
 * It returns a new sorted array ordered from the lowest price to the highest price.
 * The original array is not modified; a new copy is created and sorted.
 *
 * @param {Array} theArrayOfProductsToSort - The array of products to sort
 * @returns {Array} A new array of products sorted by price in ascending order
 */
export function sortProductsByPriceAscending(theArrayOfProductsToSort) {
  // Create a shallow copy of the array so we do not mutate the original array
  // The spread operator creates a new array with the same elements
  const theCopiedArrayOfProductsToSort = [...theArrayOfProductsToSort]

  // Sort the copied array by price in ascending order using the sort method
  // The sort method takes a comparator function that compares two elements
  theCopiedArrayOfProductsToSort.sort((firstProductObject, secondProductObject) => {
    // Subtract the second product's price from the first product's price
    // If the result is negative, firstProduct comes before secondProduct
    // If the result is positive, secondProduct comes before firstProduct
    // If the result is zero, the order does not change
    return firstProductObject.price - secondProductObject.price
  })

  // Return the newly sorted copy of the products array
  return theCopiedArrayOfProductsToSort
}
