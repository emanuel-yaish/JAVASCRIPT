// if else conditional expression.
function ifElseValidation(password) {
  if (password.length() > 7) return "Strong";
  else return "Weak";
}

// ternary conditional expression.
function ternaryValidation(password) {
  password.length > 7 ? "Strong" : "Weak";
}

function advancedValidation(password) {
  return password.length > 7
    ? /[A-Z]/.test(password)
      ? "Very Strong"
      : "Strong"
    : "Weak";
}

console.log(advancedValidation("aAcdefghij"));
console.log(advancedValidation("asA"));
console.log(advancedValidation("abcdefghij"));
console.log(advancedValidation("abcDefghij"));
