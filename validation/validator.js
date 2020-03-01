const Validator = require('validator')
const isEmpty = require('is-empty')

module.exports = function() {
  function validateRegisterData(data) {
    let errors = {}

    data.email = !isEmpty(data.email) ? data.email : ""
    data.password = !isEmpty(data.password) ? data.password : ""
    data.passwordConfirm = !isEmpty(data.passwordConfirm) ? data.passwordConfirm : ""

    // validate email
    if (Validator.isEmpty(data.email))
      errors.email = "Email field is required"
    else if (!Validator.isEmail(data.email))
      errors.email = "Email is invalid"

    // validate password
    if (Validator.isEmpty(data.password))
      errors.password = "Password field is required"

    if (Validator.isEmpty(data.passwordConfirm))
      errors.passwordConfirm = "Confirm password field is required"

    if (!Validator.isLength(data.password, { min: 6, max: 30 }))
      errors.password = "Password must be at least 6 characters"

    if (!Validator.equals(data.password, data.password2))
      errors.passwordConfirm = "Passwords must match"

    return {
      errors,
      isValid: isEmpty(errors)
    }
  }

  // validates login parameters
  // does not authenticate/authorize
  function validateLoginData(data) {
    let errors = {}

    data.email = !isEmpty(data.email) ? data.email : ""
    data.password = !isEmpty(data.password) ? data.password : ""

    // validate email
    if (Validator.isEmpty(data.email))
      errors.email = "Email field is required"
    else if (!Validator.isEmail(data.email))
      errors.email = "Email is invalid"

    // validate password
    if (Validator.isEmpty(data.password))
      errors.password = "Password field is required"

    return {
      errors,
      isValid: isEmpty(errors)
    }
  }

  return {
    validateRegisterData,
    validateLoginData,
  }
}
