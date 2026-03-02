---
name: Narrating Code Comments
description: Flag comments that merely restate what the code does rather than explaining why it does it.
---

# Narrating Code Comments

## Context

Every file in this codebase (`utils/cartHelper.js`, `utils/formValidator.js`, `utils/productFilter.js`, `components/ProductCard.vue`) is saturated with comments that narrate the code line-by-line. These comments add noise without adding value — a reader who can read JavaScript already knows that `array.push(item)` pushes an item into an array. Useful comments explain intent, trade-offs, constraints, or non-obvious decisions that the code itself cannot convey.

## What to Check

### 1. Comments that restate the code in plain English

A narrating comment is one where removing it leaves the reader with exactly the same understanding. Flag any comment where the very next line of code makes the comment redundant.

**BAD — comment says the same thing as the code:**
```js
// Push the product item into the array of cart items
theShoppingCartObject.theArrayOfCartItems.push(productItem)

// Return the boolean result of the validation test
return doesTheEmailAddressPassValidation

// Trim leading and trailing whitespace from the string value
const theTrimmedTextFieldValueString = theTextFieldValueStringToValidate.trim()

// Create a shallow copy of the array so we do not mutate the original array
const theCopiedArrayOfProductsToSort = [...theArrayOfProductsToSort]
```

**GOOD — comment explains a non-obvious decision:**
```js
// Vue's reactive() wraps the object so mutations trigger re-renders in consuming components
const cart = reactive({ items: [], total: 0 })

// Subtract before splice so the index is still valid at the time of price update
cart.total -= cart.items[index].price
cart.items.splice(index, 1)

// Use a copy to avoid mutating the caller's array, which could cause unexpected reactivity side effects
const sorted = [...products].sort(...)
```

### 2. Block comments that describe the obvious signature

JSDoc-style comments that only repeat the function name and parameter names without adding new information.

**BAD:**
```js
/**
 * validateEmailAddress
 *
 * Checks whether the given string is a valid email address.
 * Returns true if valid, false if not valid.
 *
 * @param {string} theEmailAddressStringToValidate - The email address string to validate
 * @returns {boolean} true if the email address is valid, false otherwise
 */
export function validateEmailAddress(theEmailAddressStringToValidate) {
```

**GOOD — documents a non-obvious constraint:**
```js
/**
 * Validates email format only — does NOT check deliverability or MX records.
 * Accepts addresses like `a@b.c` which are technically valid but rarely real.
 * Use a service like Mailgun Validate for deliverability checks.
 */
export function validateEmailAddress(email) {
```

### 3. Comments inside template blocks that describe visible HTML

**BAD (`components/ProductCard.vue`):**
```html
<!-- Display the product image using an img tag -->
<img :src="productImageSourceUrl" :alt="theProductObject.nameOfTheProduct" />

<!-- Display the name of the product in an h2 heading element -->
<h2 class="product-card__name-heading">{{ theProductObject.nameOfTheProduct }}</h2>
```

**GOOD — comments only where the template logic is non-obvious:**
```html
<!-- Disabled state is controlled by isCurrentlyOutOfStock so screen readers announce unavailability -->
<button :disabled="theProductObject.isCurrentlyOutOfStock" @click="handleAddToCartButtonClick">
```

## Key Files to Check

- `utils/cartHelper.js`
- `utils/formValidator.js`
- `utils/productFilter.js`
- `components/ProductCard.vue`

## Exclusions

- License headers and file-level module descriptions are acceptable.
- Comments that reference an external spec, ticket number, or business rule are acceptable even if they seem verbose (e.g., `// Per PCI-DSS §6.3, passwords must be hashed before storage`).
- `TODO` / `FIXME` comments that track known issues are acceptable.
