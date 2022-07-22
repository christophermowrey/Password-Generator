// Assignment Code
var generateBtn = document.querySelector('#generate');
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numChar = "1234567890";
var specChar = "[ ~`!@#$%^&*()_+-=,./<>?;':\"{}\|]";
var i = 0;
var j = 0;
var k = 0;
var l = 0;
// /" escapes the quote, allowing inclusion";;
console.log(specChar);

function generatePassword() {
  console.log("function runs");

  // TODO: add code to generate the password here
  var password = ""
  var lowerChoice = window.prompt(
    "Would you like to use lower case letters? (y/n)"
  );
  var upperChoice = window.prompt(
    "Would you like to use upper case letters? (y/n)"
  );
  var numChoice = window.prompt(
    "Would you like to use numbers? (y/n)"
  );
  var specChoice = window.prompt(
    "Would you like to use special characters? (y/n)"
  );
  var charLength = window.prompt(
    "Using the number pad, choose a password length between 8-128"
  );
  while (lowerChoice === "y" && i < 1) {
    password = password.concat(lowerChar);
    console.log(password);
    i++;
  };
  while (upperChoice === "y" && j < 1) {
    password = password.concat(upperChar);
    console.log(password);
    j++;
  };
  while (numChoice === "y" && k < 1) {
    password = password.concat(numChar);
    console.log(password);
    k++;
  };
  while (specChoice === "y" && l < 1) {
    password = password.concat(specChar);
    console.log(password);
    l++;
  };
  var chars = password;
  var password = "";
  console.log(password);
    // below substring generator from: https://dev.to/code_mystery/random-password-generator-using-javascript-6a
  for (var m = 0; m <= charLength; m++) {
    console.log(m);
    console.log(chars);
        var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
    console.log(password);
   };
   console.log(password);
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


