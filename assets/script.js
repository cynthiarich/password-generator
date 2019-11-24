var pwLength = document.querySelector("#length");
var pwSlider = document.querySelector(".form-control-range");
var pwLengthSpan = document.querySelector(".pwlength");
var charInput = document.querySelector("#charInput")
var pwUppercase = document.querySelector("#uppercase");
var pwLowercase = document.querySelector("#lowercase");
var pwNumeric = document.querySelector("#numeric");
var pwSpecial = document.querySelector("#special");
var passwordSpan = document.querySelector("#newpassword");
var copyBtn = document.querySelector("#copypw");
var genPW = document.querySelector("#generate");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numeric = "1234567890";
var special = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";

var password = "";

function generatePassword() {
    password = "";
    var masterString = "";
    
    if (pwUppercase.checked){
        masterString += uppercase;
    }
    
    if (pwLowercase.checked){
        masterString += lowercase;
    }
    
    if (pwNumeric.checked){
        masterString += numeric;
    }
    
    if (pwSpecial.checked){
        masterString += special;
    }
    
    console.log("masterstring: ", masterString);
    for (var i = 0; i < pwLength.value; i++) {
        password += masterString.charAt(Math.floor(Math.random() * masterString.length));
    }
    console.log(password);
    passwordSpan.textContent = password;

}

function validateInput() {

    if (pwUppercase.checked === false 
        && pwLowercase.checked === false 
        && pwNumeric.checked === false 
        && pwSpecial.checked === false){
        alert("You must select at least one character type to include.");
    }
    else {
        generatePassword();
    }
}

function updateLength() {
    pwSlider.setAttribute("value", pwLength.value);
    pwLengthSpan.textContent = pwLength.value;
    generatePassword();
}

pwLength.addEventListener("input", updateLength);
charInput.addEventListener("click", function (event) {
    if (event.target.type === "checkbox"){
        validateInput();
    }  
});
genPW.addEventListener("click", validateInput);
copyBtn.addEventListener("click", function () {
    var copyText = document.getElementById("newpassword");
    var textArea = document.createElement("textarea");
    textArea.value = copyText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
})

