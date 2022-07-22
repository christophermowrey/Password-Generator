// Assignment Code
var generateBtn = document.querySelector('#generate');
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = lowerChar.toUpperCase();
var numChar = "1234567890";
var specChar = "[ ~`!@#$%^&*()_+-=,./<>?;':\"{}\|]"
// /" escapes the quote, allowing inclusion";;
console.log(specChar)

function generatePassword() {
  var password = '';

  // TODO: add code to generate the password here
  var lowerChoice = window.prompt(
    "Would you like to use lower case letters? (y/n)"
  )
  var upperChoice = window.prompt(
    "Would you like to use upper case letters? (y/n)"
  )
  var numChoice = window.prompt(
    "Would you like to use numbers? (y/n)"
  )
  var specChar = window.prompt(
    "Would you like to use special characters? (y/n)"
  )
  var charLength = window.prompt(
    "Using the number pad, choose a password length between 8-128"
  )
  if (lowerChoice === "y") {
    password = password.concat(lowerChar);
    console.log(password);
    return;
  }
  if (upperChoice === "y") {
    password = password.concat(upperChar);
    console.log(password);
    return;
  }
  if (numChoice === "y") {
    password = password.concat(numChar);
    console.log(password);
    return;
  }
  if (specChar === "y") {
    password = password.concat(specChar);
    console.log(password);
    return;
  }
  // for (var i = 0; i <= passwordLength; i++) {
  //   var randomNumber = Math.floor(Math.random() * password.length);
  //   password += password.substring(randomNumber, randomNumber +1);
  //  }

  return password;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


