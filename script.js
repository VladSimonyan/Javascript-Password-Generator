
var generateBtn = document.querySelector("#generate");


function randomPickChar(text, numberChars = 1) {
  let randomString = "";

  for (let i = 0; i < numberChars; i++) {
    randomString += text.charAt(Math.floor(Math.random() * text.length));
  }

  return randomString;
}

function generatePassword() {
  
  let numberChars = "0123456789";
  let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowerChars = "abcdefghijklmnopqrstuvwxyz";
  let specialChars = `!"#$%&'()*+,-./:;<=>?@[\]^_\`{|}~`;
  let charsToInclude = "";

  let passwordValue = "";

  let passwordLength;
  let includeLowerCase = false;
  let includeUpperCase = false;
  let includeNumeric = false;
  let includeSpecialCharacters = false;

  let passwordlength;
 
  
  passwordLength = parseInt(
    prompt("Please specify a password length atleast 8 to 128 characters")
  );
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Invalid password length entered");
    //using the next code line to remove the word undefined
    return "";
  }
  

  includeLowerCase = confirm("Do you want to include lower case characters");

  includeUpperCase = confirm("Do you want to include upper case characters");

  includeNumeric = confirm("Do you want to include numeric characters");

  includeSpecialCharacters = confirm(
    "Do you want to include special characters"
  );
 
  
  if (includeLowerCase) {
    charsToInclude += lowerChars;
    passwordValue += randomPickChar(lowerChars);
  }

  if (includeUpperCase) {
    charsToInclude += upperChars;
    passwordValue += randomPickChar(upperChars);
  }

  if (includeNumeric) {
    charsToInclude += numberChars;
    passwordValue += randomPickChar(numberChars);
  }

  if (includeSpecialCharacters) {
    charsToInclude += specialChars;
    passwordValue += randomPickChar(specialChars);
  }

  passwordValue += randomPickChar(
    charsToInclude,
    passwordLength - passwordValue.length
  );

  passwordValue = randomPickChar(passwordValue, passwordValue.length);

  return passwordValue;
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
