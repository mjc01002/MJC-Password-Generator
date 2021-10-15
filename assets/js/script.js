// Assignment code here
var length = getPasswordLength();
const numbersList = "0123456789";
const upperCase2 = "ABCDEFGHIJKLMNPQRSTUVWXYZ";
const lowerCase3 = "abcdefghilklmnopqrstuvwxyz";
const specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

function getPasswordLength() {
  var length = parseInt(prompt("What length would you like for the password? (min: 8, max: 128)"));

  while (length < 8 || length > 128) {
   alert("Invalid length. Re-enter length.");
   length = parseInt(prompt("What length would you like for the password? (min: 8, max: 128)"));
  }

  return length;
}
console.log(length);


    var numbers = prompt("Do you want numbers in your password?");
    var numbers = numbers.toLowerCase()
    if(numbers === "yes") {
      numbers = 1;
    
      } else {
      numbers = 0;
}
      console.log(numbers);
      var upperCase = window.prompt("Do you want uppercase letters in your password?");
      var upperCase1 = upperCase.toLowerCase()
      
      if(upperCase1 === "yes") {
        upperCase1 = 1;
          
        } else {
      upperCase1 = 0;
}
    console.log(upperCase1);
  
      var lowerCase = prompt("Do you want lower case letters in your password?");
      var lowerCase1= lowerCase.toLowerCase();
      if(lowerCase1 === "yes") {
          lowerCase1 = 1;
          
        } else {
          lowerCase1 = 0;

    }
    console.log(lowerCase1);
  
      var specialCharacters = prompt("Do you want special characters in your password?");
      var specialCharacters1 = specialCharacters.toLowerCase();
      if(specialCharacters1 === "yes") {
        specialCharacters1 = 1;
    
      } else {
        specialCharacters1 = 0;
      }

      console.log(specialCharacters1);


    var password = [];
    let i = 0;
    while (i < length) {
    password.push(Math.round(Math.random() * upperCase2.length));
    i++;
    var password1 = password.join("");
    console.log(password1);
    
    //console.log(password);
  

document.getElementById("password").value = password1;

     //while (password.length < length) {
 //password += //get a random character of the desired types
   //  } 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password1 = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password1;

}
      }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generatePassword()

  
      
    





//generatePassword()

//document.querySelector('#generate').addEventListener("click", getPasswordLength); {