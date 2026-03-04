---
name: Variable Naming Conventions
description: Ensure variable names follow idiomatic JavaScript/Vue conventions without excessive verbosity.
---

# Variable Naming Conventions

## Context

This codebase contains variable names with extreme verbosity (e.g., `theProductObject`, `theTotalPriceOfAllItemsInTheCart`) that reduce readability and deviate from JavaScript/Vue community conventions. Variable names should be descriptive but concise.

## What to Check

### 1. Avoid Redundant Prefixes

Do not prefix variable names with articles like `the`, `a`, or `an`. This adds no information since all variables represent "the" thing they name.

**PASS:**
```js
const product = { name: 'Socks', price: 10 }
const cart = reactive({ items: [], total: 0 })
const email = 'user@example.com'
```

**FAIL:**
```js
const theProductObject = { name: 'Socks', price: 10 }
const aCartItem = { id: 1 }
const anEmailAddressString = 'user@example.com'
```

### 2. Avoid Type Suffixes

Do not add type information to variable names (e.g., `Object`, `String`, `Array`, `Number`). JavaScript is dynamically typed, and the type should be clear from context or inferred from usage.

**PASS:**
```js
const products = []
const email = 'test@example.com'
const price = 19.99
const isValid = true
```

**FAIL:**
```js
const theArrayOfProducts = []
const theEmailAddressString = 'test@example.com'
const thePriceNumber = 19.99
const isValidBoolean = true
```

### 3. Avoid Overly Descriptive Names

Variable names should be concise. Break complex concepts into multiple variables rather than encoding all information into one name.

**PASS:**
```js
const cart = { items: [], total: 0 }
function addToCart(item) {
  cart.items.push(item)
  cart.total += item.price
}
```

**FAIL:**
```js
const theShoppingCartObject = {
  theArrayOfCartItems: [],
  theTotalPriceOfAllItemsInTheCart: 0,
}
function addItemToTheShoppingCart(productItem) {
  theShoppingCartObject.theArrayOfCartItems.push(productItem)
  theShoppingCartObject.theTotalPriceOfAllItemsInTheCart += productItem.theProductPrice
}
```

### 4. Follow Naming Conventions

- Variables and functions: `camelCase`
- Classes: `PascalCase`
- Constants: `UPPER_SNAKE_CASE` (only for truly immutable constants)
- Private/internal: prefix with `_` (optional, but consistent)

**PASS:**
```js
const maxRetries = 3
const apiUrl = 'https://api.example.com'
function fetchProducts() { }
class ProductCard { }
const _internalHelper = () => { }
```

**FAIL:**
```js
const TheMaximumNumberOfRetriesAllowed = 3
const the_url_of_the_api = 'https://api.example.com'
function Fetch_Products() { }
const internalHelperButNotPrefixed = () => { }
```

### 5. Boolean Naming

Boolean variables should start with `is`, `has`, `can`, `should`, `will`, or `must` to clearly indicate they are predicates.

**PASS:**
```js
const isLoggedIn = true
const hasItems = cart.items.length > 0
const canAddToCart = !product.isOutOfStock
```

**FAIL:**
```js
const loggedIn = true  // Ambiguous - could be a user object
const items = cart.items.length > 0  // Name suggests array, not boolean
const outOfStock = product.stock === 0  // Positive form preferred when possible
```

## Key Files to Check

- `components/*.vue` - Component script sections
- `utils/*.js` - Utility files
- `main.js` - Main entry point

## Exclusions

- Variables in very small local scopes (e.g., loop variables) may be short single letters
- API contracts or external library integrations may require specific naming to match external schemas
- Existing code being refactored gradually - flag new additions most strongly
