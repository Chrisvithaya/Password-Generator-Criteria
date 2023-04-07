// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

function getRandomCharacter(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  var randomPasswordChar = array[randomIndex];
  return randomPasswordChar;
}


function generatePassword(){
var isValid = false;
var passwordLength = prompt("How long do you want your password to be?");
while(!isValid){
  var passwordNum = parseInt(passwordLength)
  if(passwordNum >= 8 && passwordNum <= 128 )
  {
    isValid = true;
  }else{
    passwordLength = prompt("Please enter a number between 8-128");
  }
}
var hasSpecialChars = confirm('Do you want special characters?');
var hasUpperCase = confirm('Do you want uppercase letters?');
var hasLowerCase = confirm('Do you want lowercase letters?');
var hasNumbers = confirm('Do you want numbers');

var passwordOptions = {
  passwordLength: passwordLength,
  hasSpecialChars: hasSpecialChars,
  hasLowerCase: hasLowerCase,
  hasUpperCase: hasUpperCase,
  hasNumbers: hasNumbers,
};

var possiblePasswordChars = [];
var password = [];

if (passwordOptions.hasSpecialChars) {
    possiblePasswordChars = possiblePasswordChars.concat(specialCharacters);

}
if (passwordOptions.hasNumbers) {
    possiblePasswordChars = possiblePasswordChars.concat(numbers);

}
if (passwordOptions.hasUpperCase) {
    possiblePasswordChars = possiblePasswordChars.concat(upperCasedCharacters);
   
}
if (passwordOptions.hasLowerCase) {
    possiblePasswordChars = possiblePasswordChars.concat(lowerCasedCharacters);
   
}
console.log(possiblePasswordChars)

for (var i = 0; i < parseInt(passwordLength); i++) {
    var randomChar = getRandomCharacter(possiblePasswordChars);
    password.push(randomChar);
}
 return password
}
// Write password to the #password input
function writePassword() {
  var randomPassword = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = randomPassword.join('');
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

