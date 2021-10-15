// Assignment code here
// enter values, check password criteria, and validate criteria
function password(){
      var passwordLength = window.prompt("Enter a length (8 to 128) for your password.");
      console.log(passwordLength);
      if(8 <= passwordLength && passwordLength <= 128){
        passwordLength = passwordLength;
      } else {
        confirm("Please enter a number between 8 and 128!");
        password();
      }
     

      window.alert("Password must include at least 1 upperchase, lowercase, or special character.")

      var upperCase = window.prompt("Do you want uppercase letters in your password?");
      console.log(upperCase);

      upperCase.toLowerCase();
      if(upperCase === "yes") {
        upperCase = 1;
      } else {
        upperCase = 0;
      }

      var lowerCase = window.prompt("Do you want lower case letters in your password?");
      console.log(lowerCase);

      upperCase.toLowerCase();
      if(lowerCase === "yes") {
        lowerCase = 1;
      } else {
        lowerCase = 0;
      }

      var specialCharacters = window.prompt("Do you want special characters in your password?");
      console.log(specialCharacters);

      specialCharacters.toLowerCase();
      if(specialCharacters === "yes") {
        specialCharacters = 1;
      } else {
        specialCharacters = 0;
      }
      }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function createPassword() {
  var passwordLength = window.prompt("How long do you want your password to be? (8 to 128 Characters");
}
password()