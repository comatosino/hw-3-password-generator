// Assignment Code
//DO NOT CHANGE THIS CODE
var generateBtn = document.querySelector("#generate");

// create arrays for each of lowercase, uppercase, numbers, and special characters
var lowerAlphaArray = "abcdefghijklmnopqrstuvwxyz".split("");
var upperAlphaArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numsArray = "0123456789".split("");
var specCharsArray = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split("");

// returns a string of given length of random characters of specified type
// returns corresponding message if no length entered or char types selected
function generatePassword () {
  var passwordLength = getPasswordLength();

  // if no length entered, return message
  if (passwordLength == null) {
    return "Password not generated: No valid length entered";
  // else proceed to select character types
  } else {
    var passwordArray = getPasswordArray();

    // if user did not confirm any char types, return message
    if (passwordArray.length == 0) {
      return "Password not generated: No character types selected"; 
    }

    // length and char types given, generate the password and return it
    var extraSecretPassword = "";
    for (i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * passwordArray.length)
      extraSecretPassword = extraSecretPassword.concat(passwordArray[randomIndex]);
    }
    return extraSecretPassword;
  }  
}

// prompts user for password length
// if user enters integer between 8 and 128, inclusive, returns that integer
// else returns null
function getPasswordLength() {
  var userInput = "";

  // if user does not click cancel, keep prompting
  while (userInput != null) {
    userInput = window.prompt("Please enter a password length of at least 8 characters and no more than 128 characters.", "");
    numChars = Number(userInput);
    console.log(userInput);
    console.log(numChars);

    // return if user entered valid integer
    if (!isNaN(numChars) && Number.isInteger(numChars) && numChars >= 8 && numChars <= 128) {
      return numChars;
    }
  }

  // user clicked cancel, return null
  return userInput;
}

// prompts the user to select character types to be included in the password
// returns an array of selected character types
function getPasswordArray () {
  var charTypesArray = [];

  // prompt user to include lowercase alphabet chars
  var useLowerAlpha = window.confirm("use lowercase?");
  if (useLowerAlpha) {
    charTypesArray = charTypesArray.concat(lowerAlphaArray);
  }

  // prompt user to include uppercase alphabet characters
  var useUpperAlpha = window.confirm("use uppercase?");
  if (useUpperAlpha) {
    charTypesArray = charTypesArray.concat(upperAlphaArray);
  }

  // prompt user to include numbers 0-9
  var useNums = window.confirm("use numbers?");
  if (useNums) {
    charTypesArray = charTypesArray.concat(numsArray);
  }

  // prompt user to include special characters
  var useSpecChars = window.confirm("use special characters?");
  if (useSpecChars) {
    charTypesArray = charTypesArray.concat(specCharsArray);
  }
  console.log(charTypesArray);
  return charTypesArray;
}

// Write password to the #password input
/* DO NOT CHANGE THIS CODE!  This function is going to call your generatePassword() function and whatever is returned from that function will be put onto the page */
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// DO NOT CHANGE THIS CODE
generateBtn.addEventListener("click", writePassword);