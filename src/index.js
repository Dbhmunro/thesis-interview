// ** set copyright year **
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();


// ** show/hide password text **
var pwd = document.getElementById('pwd');
var eye = document.getElementById('eye');

eye.addEventListener('click',togglePass);

function togglePass(){

   eye.classList.toggle('active');

   (pwd.type == 'password') ? pwd.type = 'text' : pwd.type = 'password';
}

// ** close links **
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
    const linksHeight = links.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }
});

// ** Form Submission and Validation **
const signUpForm = document.getElementById("sign-up-form")

signUpForm.addEventListener('submit', function(e) {
    e.preventDefault();

    let name = document.signUpForm.name;
    let email = document.signUpForm.email;
    let password = document.signUpForm.password;
    let msg = document.getElementById('msg');
    
    if (name.value == "") {
        msg.style.display = 'block';
        msg.innerHTML = "Please enter your name";
        name.focus();
        return false;
    } else {
        msg.innerHTML = "";
    }

    if (email.value == "") {
        msg.style.display = 'block';
        msg.innerHTML = "Please enter your email";
        email.focus();
        return false;
    } else {
        msg.innerHTML = "";
    }
    
    if (password.value == "") {
        msg.innerHTML = "Please enter your password";
        password.focus();
        return false;
    } else {
        msg.innerHTML = "";
    }
    
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email.value)) {
        msg.innerHTML = "Please enter a valid email";
        email.focus();
        return false;
    } else {
        msg.innerHTML = "";
    }
})

