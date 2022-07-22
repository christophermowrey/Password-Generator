// Assignment Code
var generateBtn = document.querySelector('#generate');
var lowerChar = "abcdefghijklmnopqrstuvwxyz"
var upperChar = lowerChar.toUpperCase()
var numChar = "1234567890"
var specChar = "[ ~`!@#$%^&*()_+-=,./<>?;':\"{}\|]"
// /" escapes the quote, allowing inclusion"
console.log(specChar)

function generatePassword() {
  var password = 'password';
  // TODO: add code to generate the password here
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
