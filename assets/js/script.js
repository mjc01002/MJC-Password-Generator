// Assignment code here
var specialChar = ["!","#","$","%","&"];
// enter values, check password criteria, and validate criteria

document.querySelector('#generate').addEventListener("click", password); {
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
      var upperCase1 = upperCase.toLowerCase()
      
      if(upperCase1 === "yes") {
        upperCase1 = passwordLength / 4;
        upperCase1 = Math.round(upperCase1);
        
    } else {
      upperCase1 = 0;
    }
      
      console.log(upperCase1);
  
      var lowerCase = window.prompt("Do you want lower case letters in your password?");
      var lowerCase1= lowerCase.toLowerCase();
      if(lowerCase1 === "yes") {
        lowerCase1 = passwordLength / 4;
        lowerCase1 = Math.round(lowerCase1);
      } else {
        lowerCase1 = 0;
      }
      console.log(lowerCase1);

      var specialCharacters = window.prompt("Do you want special characters in your password?");
      var specialCharacters1 = specialCharacters.toLowerCase();
      if(specialCharacters1 === "yes") {
        specialCharacters1 = passwordLength / 4;
        specialCharacters1 = Math.round(specialCharacters1);
      } else {
        specialCharacters1 = 0;
      }
      console.log(specialCharacters1);

      var upperCase1 = function generateRandomLetter() {
        for (let i = 0; i < upperCase1.length; i++) { 
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        return alphabet[Math.floor(Math.random() * alphabet.length)]}
        
        console.log(upperCase1);
      //}
    } } 
}


 
 


// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
 // var password = generatePassword();
//  var passwordText = document.querySelector("#password");

 // passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);

//function password() {
  
//}





//function generateRandomLetter1() {
  //const alphabet = "abcdefghijklmnopqrstuvwxyz"

  //return alphabet[Math.floor(Math.random() * alphabet.length)]
//}

//console.log(generateRandomLetter1()) // "o"
//console.log(generateRandomLetter1()) // "X"
