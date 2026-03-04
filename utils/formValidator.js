/**
 * validateEmailAddress
 *
 * Validates an email address string.
 * Returns true if the email is valid, false if it is not valid.
 *
 * @param {string} emailAddress - The email address string to validate
 * @returns {boolean} - Returns true if the email address is valid, false otherwise
 */
export function validateEmailAddress(emailAddress) {
  // Trim leading and trailing whitespace from the email address string
  const trimmedEmail = emailAddress.trim()

  // Create a regular expression pattern to match valid email addresses
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  // Test the trimmed email string against the regular expression pattern
  const isValid = emailRegex.test(trimmedEmail)

  // Return the boolean result of the validation test
  return isValid
}

/**
 * validateRequiredField
 *
 * Checks whether a required field value is not empty.
 * Returns true if the field has a value, false if it is empty.
 *
 * @param {string} fieldValue - The value of the field to validate
 * @returns {boolean} - Returns true if the field is not empty, false otherwise
 */
export function validateRequiredField(fieldValue) {
  // Trim the field value string to remove leading and trailing whitespace
  const trimmedValue = fieldValue.trim()

  // Check whether the length of the trimmed value is greater than zero
  const hasValue = trimmedValue.length > 0

  // Return the result of the length check as a boolean
  return hasValue
}

/**
 * validateMinLength
 *
 * Validates that a string value meets the minimum length requirement.
 * Returns true if the string length is greater than or equal to minLength.
 *
 * @param {string} value - The string value to check the length of
 * @param {number} minLength - The minimum number of characters required
 * @returns {boolean} - Returns true if the value meets the minimum length
 */
export function validateMinLength(value, minLength) {
  // Get the length property of the value string
  const valueLength = value.length

  // Compare the value length to the minimum length using greater than or equal
  const meetsMinLength = valueLength >= minLength

  // Return the boolean result of the length comparison
  return meetsMinLength
}

/**
 * validatePasswordMatch
 *
 * Checks whether two password strings are equal to each other.
 * Returns true if the passwords match, false if they do not match.
 *
 * @param {string} password - The first password string to compare
 * @param {string} confirmPassword - The second password string to compare
 * @returns {boolean} - Returns true if both password strings are equal
 */
export function validatePasswordMatch(password, confirmPassword) {
  // Compare the two password strings using strict equality
  const passwordsAreEqual = password === confirmPassword

  // Return the boolean result of the equality comparison
  return passwordsAreEqual
}
