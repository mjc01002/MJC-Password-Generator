// Assignment code here
var length = getPasswordLength();
var characterPool = [];
const numbersList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const upperCase2 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowerCase2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const specialChar = ['!', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];


//document.querySelector('#generate').addEventListener("click", getPasswordLength());



function getPasswordLength() {
  
  var length = parseInt(prompt("What length would you like for the password? (min: 8, max: 128)"));

  while (length < 8 || length > 128) {
   alert("Invalid length. Re-enter length.");
   length = parseInt(prompt("What length would you like for the password? (min: 8, max: 128)"));
  }

  return length;
  
}


function generatePassword() {

    var numbers = prompt("Do you want numbers in your password?");
    var numbers = numbers.toLowerCase()
    if(numbers === "yes") {
      characterPool.push.apply(characterPool, numbersList);
    
      } else {
      numbers = 0;
}
      console.log(numbers);
      console.log(characterPool);
      
      
    var upperCase = window.prompt("Do you want uppercase letters in your password?");
    var upperCase1 = upperCase.toLowerCase()
    if(upperCase1 === "yes") {
      characterPool.push.apply(characterPool, upperCase2);
          
        } else {
      upperCase1 = 0;
}
    console.log(upperCase1);
    console.log(characterPool);
  
      var lowerCase = prompt("Do you want lower case letters in your password?");
      var lowerCase1= lowerCase.toLowerCase();
      if(lowerCase1 === "yes") {
        characterPool.push.apply(characterPool, lowerCase2);
          
        } else {
          lowerCase1 = 0;

    }
    console.log(lowerCase1);
  
      var specialCharacters = prompt("Do you want special characters in your password?");
      var specialCharacters1 = specialCharacters.toLowerCase();
      if(specialCharacters1 === "yes") {
        characterPool.push.apply(characterPool, specialChar);
    
      } else {
        specialCharacters1 = 0;
      }

      console.log(specialCharacters1);
      console.log(characterPool);
    // if(numbers = 0 && upperCase1 = 0 && lowerCase1 = 0 && specialCharacters = 0 ) {

     }
    


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