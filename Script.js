const passwordBox = document.getElementById("password");
const lenght = 12;

const ucase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lcase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*(){}[]<>/";
const allChar = ucase + lcase + number + symbol;

function createPassword(){
    let password = "";
    password += ucase[Math.floor(Math.random() * ucase.length)];
    password += lcase[Math.floor(Math.random() * lcase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += ucase[Math.floor(Math.random() * symbol.length)];

    while(lenght > password.length){
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }

    passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}

