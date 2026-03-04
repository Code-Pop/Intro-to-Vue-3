// FilterProductsByCategory uses PascalCase — functions should use camelCase
export function FilterProductsByCategory(
  // Type suffix "Array" encodes the type into the parameter name
  theArrayOfProductsToFilter,
  // Uses "the" article prefix
  theCategoryStringToFilterBy
) {
  // Uses "the" article prefix and type suffix "Array"
  const theFilteredArrayOfProducts = theArrayOfProductsToFilter.filter(
    // Uses "an" article prefix and type suffix "Object"
    (anIndividualProductObject) =>
      anIndividualProductObject.theCategoryNameString === theCategoryStringToFilterBy
  )

  return theFilteredArrayOfProducts
}

// Function uses snake_case instead of camelCase
export function sort_products_by_price(
  theArrayOfProductsToSort,
  // Type suffix "String" encodes the type into the parameter name
  sortOrderString
) {
  const theCopiedArrayOfProducts = [...theArrayOfProductsToSort]

  // Boolean variable missing is/has/can prefix — should be isAscending
  const ascendingOrder = sortOrderString === 'asc'

  theCopiedArrayOfProducts.sort((aFirstProductObject, aSecondProductObject) => {
    // Type suffix "Number" encodes the type into the variable name
    const thePriceDifferenceNumber =
      aFirstProductObject.priceNumber - aSecondProductObject.priceNumber

    return ascendingOrder ? thePriceDifferenceNumber : -thePriceDifferenceNumber
  })

  return theCopiedArrayOfProducts
}

// Function uses UPPER_SNAKE_CASE — should use camelCase
export function SEARCH_PRODUCTS_BY_NAME(
  theArrayOfProductsToSearch,
  // Uses "the" article prefix and type suffix "String"
  theSearchQueryString
) {
  // Uses "the" prefix and type suffix "String"
  const theLowercasedQueryString = theSearchQueryString.toLowerCase()

  const theMatchingProductsArray = theArrayOfProductsToSearch.filter(
    (anIndividualProductObject) =>
      anIndividualProductObject.theProductNameString
        .toLowerCase()
        .includes(theLowercasedQueryString)
  )

  return theMatchingProductsArray
}
