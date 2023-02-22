// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// var characters
var upAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var specialChars = "!@#$%^&*()_+=-.,/~";

//function to generate password & empty stings to store user input
function generatePassword() {
    var allChar = "";
    var userPassword = "";


//function to prompt the user for password criteria

//function promptUser() {
var passwordLength = parseInt(prompt("How many characters would you like your password to contain?"));
    if (passwordLength < 10 || passwordLength > 120) { 
        alert("Password length must be between 10 and 120 characters. Please try again.");
        generatePassword();
    } ;
    if (passwordLength < 10) {
        alert("Password length must be at least 10 characters. Please try again.");
        return;
    } ;
    if (passwordLength > 120) {
        alert("Password length must be less than 120 characters. Please try again.");
        return;
    } 
    else {
        var upAlpha = confirm("Click OK to confirm including uppercase letters.");
        var lowercase = confirm("Click OK to confirm including lowercase letters.");
        var numbers = confirm("Click OK to confirm including numbers.");
        var specialChars = confirm("Click OK to confirm including special characters.");
    //};
    
// if user does not select any character types, alert user
    if (upAlpha === false && lowercase === false && numbers === false && specialChars === false) { 
        alert("You must select at least one character type. Please try again.");
        return;
    };

    if (upAlpha === true) {
        allChars += upAlpha;
        userPassword += upAlpha[Math.floor(Math.random() * upAlpha.length)];
    };

    if (lowercase === true) {
        allChars += lowercase;
        userPassword += lowercase[Math.floor(Math.random() * lowercase.length)];
    };

    if (numbers === true) {
        allChars += numbers;
        userPassword += numbers[Math.floor(Math.random() * numbers.length)];
    };

    if (specialChars === true) {
        allChars += specialChars;
        userPassword += specialChars[Math.floor(Math.random() * specialChars.length)];
    };

    // for loop to generate password randomly
    for (var i = 0; i < truePasswordLength; i++) {
        var randomChar = allChar[Math.floor(Math.random() * allChar.length)];
        userPassword += allChar[randomChar];
        console.log(userPassword);
    };
    return userPassword;
};



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
