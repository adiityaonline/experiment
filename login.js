const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
// Registration form validation
let regForm = document.querySelector('#reg-form');
let usernameInput = document.querySelector("#username");
let passwordInput = document.querySelector("#password");
let confirmPasswordInput = document.querySelector("#confirm-password");


function func(){
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    if(email == "Aditya@gmail.com" && pass == '123456789'){
        alert("sucess")
        window.location.assign("inde.html")

}}