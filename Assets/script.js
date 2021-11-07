const generateBtn = document.querySelector("#generate");
var finalPassword;
function generatePassword() {
  let numericArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let upperCaseArray = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
  let lowerCaseArray = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
  let specialCharacterArray = ['@', '%', '+', '|', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  let enter;
  let choices;
  let hasLowercase;
  let hasUppercase;
  let hasNumbers;
  let hasSpecial;

  // get input and validate
  enter = parseInt(prompt("How many characters do you want in your password? Please choose between 8-128 characters?"));
  if (!enter)  {
    alert("You must enter a value");
    generatePassword();
  } else if (enter < 8 || enter > 128) {
    enter = alert("Please choose a valid number, between 8 and 128.");
    generatePassword();
  } else {
  hasLowercase = confirm("Do you want to include lowercase letters?");
  hasUppercase = confirm("Do you want to include uppercase letters?");
  hasNumbers = confirm("Do you want to include numbers?");
  hasSpecial = confirm("Do you want to include special characters?");
  
  // Else if enter all cancel in all options
  if (!hasLowercase && !hasUppercase && !hasNumbers && !hasSpecial) {
    choices = alert("Please select at least one character type!");
    generatePassword();
  }
  // else if 4 selected characters
  else if (hasLowercase && hasUppercase && hasNumbers && hasSpecial) {
    choices = lowerCaseArray.concat(upperCaseArray, numericArray, specialCharacterArray);
  }
  // else if 3 selected characters
  else if (hasLowercase && hasUppercase && hasNumbers) {
    choices = lowerCaseArray.concat(upperCaseArray, numericArray);
  }
  else if (hasLowercase && hasUppercase && hasSpecial) {
    choices = lowerCaseArray.concat(upperCaseArray, specialCharacterArray);
  }
  else if (hasLowercase && hasNumbers && hasSpecial) {
    choices = lowerCaseArray.concat(numericArray, specialCharacterArray);
  }
  else if (hasUppercase && hasNumbers && hasSpecial) {
    choices = upperCaseArray.concat(numericArray, specialCharacterArray);
  }
  // else if 2 selected characters
  else if (hasLowercase && hasUppercase) {
    choices = lowerCaseArray.concat(upperCaseArray);
  }
  else if (hasLowercase && hasNumbers) {
    choices = lowerCaseArray.concat(numericArray);
  }
  else if (hasLowercase && hasSpecial) {
    choices = lowerCaseArray.concat(specialCharacterArray);
  }
  else if (hasUppercase && hasNumbers) {
    choices = upperCaseArray.concat(numericArray);
  }
  else if (hasUppercase && hasSpecial) {
    choices = upperCaseArray.concat(specialCharacterArray);
  }
  else if (hasNumbers && hasSpecial) {
    choices = numericArray.concat(specialCharacterArray);
  }
// else if only 1 selected characters
else if (hasLowercase) {
  choices = lowerCaseArray;
}
else if (hasNumbers) {
  choices = numericArray;
}
else if (hasSpecial) {
  choices = specialCharacterArray;
}
else if (hasUppercase) {
  choices = upperCaseArray;
};

// array placeholder for the password
let password = [];
// Start generating random password using selected characters
  for (let i = 0; i < enter; i++) {
    let chosenCharacters = choices[Math.floor(Math.random() * choices.length)];
    // or finalPassword += possibleCharacters[rng];
    password.push(chosenCharacters);
  }
  
  finalPassword = password.join("");
  return finalPassword;
};
};
function writePassword() {
    generatePassword();
    document.getElementById("password").textContent = finalPassword;
  }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("password");
  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */
   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
  if (!navigator.clipboard) {
    console.log("navigator clipboard not available")
    return
  }
  alert("You have copied the generated password: " + copyText.value);
}
