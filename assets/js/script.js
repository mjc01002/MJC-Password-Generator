// Assignment code here

var characterPool = [];
const numbersList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const upperCase2 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerCase2 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const specialChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]" , "^", "_", "`", "{", "|", "}", "~"];
const doNotInclude = [];
var numbers1 = "";
var upperCase3 = "";
var lowerCase3 = "";
var specialChar1 ="";
var passwordTemp = [];
var passwordReshuffle = [];


// Set Buotton to run generate password function
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", generatePassword);

// Password Length function

function getPasswordLength() {
  
  var length = parseInt(prompt("What length would you like for the password? (min: 8, max: 128)"));



  while (length < 8 || length > 128 || isNaN(length)) {
   alert("Invalid length. Re-enter length.");
   length = parseInt(prompt("What length would you like for the password? (min: 8, max: 128)"));
  }

  return length;
  
}

//generate password function - sets character requirements, generates a random password from a set of character, and push text of password to screen.
function generatePassword() {
    var length = getPasswordLength();
    var password = "";
    var numbers = prompt("Do you want numbers in your password?")
    var numbers = numbers.toLowerCase()
    if(numbers === "yes") {
      characterPool.push.apply(characterPool, numbersList);
      numbers1 = Math.floor(Math.random() *numbersList.length);
      passwordTemp.push(numbersList[numbers1]);
      } else {
        numbers1 = Math.floor(Math.random() *doNotInclude.length);
    }     
      
      
      
      
    var upperCase = window.prompt("Do you want uppercase letters in your password?");
    var upperCase1 = upperCase.toLowerCase()
    if(upperCase1 === "yes") {
      characterPool.push.apply(characterPool, upperCase2);
      upperCase3 = Math.floor(Math.random() * upperCase2.length);  
      passwordTemp.push(upperCase2[upperCase3]);
      } else {
        upperCase3 = Math.floor(Math.random() *doNotInclude.length);
    }   
  
    var lowerCase = prompt("Do you want lower case letters in your password?");
    var lowerCase1= lowerCase.toLowerCase();
    if(lowerCase1 === "yes") {
      characterPool.push.apply(characterPool, lowerCase2);
      lowerCase3 = Math.floor(Math.random() *lowerCase2.length);
      passwordTemp.push(lowerCase2[lowerCase3]);
      } else {
          lowerCase3 = Math.floor(Math.random() *doNotInclude.length);
    }
  
    var specialCharacters = prompt("Do you want special characters in your password?");
    var specialCharacters1 = specialCharacters.toLowerCase();
    if(specialCharacters1 === "yes") {
      characterPool.push.apply(characterPool, specialChar);
      specialChar1 = Math.floor(Math.random() *specialChar.length);
      passwordTemp.push(specialChar[specialChar1])
      } else {
          specialChar1 = Math.floor(Math.random() *doNotInclude.length);
    }
      // This line makes sure the password includes the characters based on the asked questions. 
      password = passwordTemp.join("");
    
      // check that criteria is met
    if(numbers + upperCase1 + lowerCase1 + specialCharacters1 === "nononono") {
      alert("Need to include at least on number, upper case letter, lower case letter, or special character");
      
      return generatePassword();
       } else {
        
    }
      
      // adds the required amount of characters based on the first question and randomizes it for a unique password. 
    while (password.length < length){
      password += characterPool[Math.floor(Math.random() *characterPool.length)];
      
    }
      var passwordReshuffle = password.split('').sort(function(){return 0.5-Math.random()}).join('');

      // oushes password to password box on screen. 
      var passwordText = document.querySelector("#password");
      passwordText.value = passwordReshuffle;
      
      return passwordReshuffle;
    
    }


      
    





