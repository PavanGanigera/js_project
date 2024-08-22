const password = document.getElementById("password");
const length = 8;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const specialChar = "!@#$%^&*()_+-={}:<>?"
// const allChar = upperCase + lowerCase + numbers + specialChar;
const allChar = upperCase + lowerCase + numbers + specialChar;

function createPassword(){
    let password = "";
    password =+ upperCase[Math.floor(mat.random() * upperCase.length)];
    password += lowerCase[Math.floor(mat.random() * lowerCase.length)];
    password += numbers[Math.floor(mat.random() * numbers.length)];
    password += specialChar[Math.floor(mat.random() * specialChar.length)];

    while(length > password.length){
        password += allChar[Math.floor(mat.random() * allChar.length)];
    }
    passwordBox.value = password;
}