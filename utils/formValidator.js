// This file provides form validation utility functions.
// Use these functions to validate user input in forms throughout the application.

/**
 * validateEmailAddress
 *
 * Checks whether the given string is a valid email address.
 * Uses a regular expression to test the format of the email string.
 * Returns true if valid, false if not valid.
 *
 * @param {string} theEmailAddressStringToValidate - The email address string to validate
 * @returns {boolean} true if the email address is valid, false otherwise
 */
export function validateEmailAddress(theEmailAddressStringToValidate) {
  // Define a regular expression pattern for validating email addresses
  // This regex checks for the standard email format: localpart@domain.tld
  const emailAddressValidationRegularExpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  // Test the email address string against the regular expression
  // The test method returns true if the string matches the pattern
  const doesTheEmailAddressPassValidation = emailAddressValidationRegularExpression.test(
    theEmailAddressStringToValidate
  )

  // Return the boolean result of the validation test
  return doesTheEmailAddressPassValidation
}

/**
 * validatePasswordStrength
 *
 * Checks whether the given password meets the minimum strength requirements.
 * The password must be at least 8 characters long.
 * The password must contain at least one uppercase letter.
 * The password must contain at least one lowercase letter.
 * The password must contain at least one numeric digit.
 * Returns an object with an isValid boolean and an array of error messages.
 *
 * @param {string} thePasswordStringToValidate - The password string to validate
 * @returns {{ isValid: boolean, arrayOfValidationErrorMessages: string[] }}
 */
export function validatePasswordStrength(thePasswordStringToValidate) {
  // Initialize an empty array to collect all validation error messages
  const arrayOfValidationErrorMessages = []

  // Check if the password length is at least 8 characters
  // The length property returns the number of characters in the string
  const isPasswordLongEnough = thePasswordStringToValidate.length >= 8

  // If the password is too short, add an error message to the array
  if (!isPasswordLongEnough) {
    // Push an error message describing the minimum length requirement
    arrayOfValidationErrorMessages.push('Password must be at least 8 characters long')
  }

  // Check if the password contains at least one uppercase letter
  // The regex /[A-Z]/ matches any uppercase letter from A to Z
  const doesPasswordContainAtLeastOneUppercaseLetter = /[A-Z]/.test(
    thePasswordStringToValidate
  )

  // If the password has no uppercase letter, add an error message
  if (!doesPasswordContainAtLeastOneUppercaseLetter) {
    // Push an error message describing the uppercase letter requirement
    arrayOfValidationErrorMessages.push('Password must contain at least one uppercase letter')
  }

  // Check if the password contains at least one lowercase letter
  // The regex /[a-z]/ matches any lowercase letter from a to z
  const doesPasswordContainAtLeastOneLowercaseLetter = /[a-z]/.test(
    thePasswordStringToValidate
  )

  // If the password has no lowercase letter, add an error message
  if (!doesPasswordContainAtLeastOneLowercaseLetter) {
    // Push an error message describing the lowercase letter requirement
    arrayOfValidationErrorMessages.push('Password must contain at least one lowercase letter')
  }

  // Check if the password contains at least one numeric digit
  // The regex /[0-9]/ matches any digit character from 0 to 9
  const doesPasswordContainAtLeastOneNumericDigit = /[0-9]/.test(thePasswordStringToValidate)

  // If the password has no numeric digit, add an error message
  if (!doesPasswordContainAtLeastOneNumericDigit) {
    // Push an error message describing the numeric digit requirement
    arrayOfValidationErrorMessages.push('Password must contain at least one number')
  }

  // Determine whether the password passed all validation checks
  // The password is valid only if there are zero error messages in the array
  const isThePasswordValid = arrayOfValidationErrorMessages.length === 0

  // Return an object with the validity boolean and the array of error messages
  return {
    isValid: isThePasswordValid,
    arrayOfValidationErrorMessages: arrayOfValidationErrorMessages,
  }
}

/**
 * validateRequiredTextField
 *
 * Checks whether the given string value is non-empty after trimming whitespace.
 * A field is considered invalid if it is empty or contains only whitespace.
 * Returns true if the field has a value, false if it is empty.
 *
 * @param {string} theTextFieldValueStringToValidate - The text field value to validate
 * @returns {boolean} true if the field has a non-empty value, false otherwise
 */
export function validateRequiredTextField(theTextFieldValueStringToValidate) {
  // Trim leading and trailing whitespace from the string value
  // The trim method removes whitespace characters from both ends of the string
  const theTrimmedTextFieldValueString = theTextFieldValueStringToValidate.trim()

  // Check if the trimmed string has a length greater than zero
  // A length of zero means the field is empty or only contained whitespace
  const isTheTextFieldValueNonEmpty = theTrimmedTextFieldValueString.length > 0

  // Return the boolean result indicating whether the field is non-empty
  return isTheTextFieldValueNonEmpty
}
