// Selecting DOM elements
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');
let txtemail = document.querySelector('.txt-email');
let txtpass = document.querySelector('.txt-pass');
let submit = document.querySelector('.btn-sub');
let submit1 = document.querySelector('.btn-sub1');

menu.addEventListener('click', function () {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

const loginBox = document.querySelector('.login-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () => {
  loginBox.classList.add('active');
});

loginLink.addEventListener('click', () => {
  loginBox.classList.remove('active');
});

const adminEmail = "admin@web.camp";
const adminPass = "admin";


if (!localStorage.getItem("adminAdded")) {
  localStorage.setItem("email", adminEmail);
  localStorage.setItem("pass", adminPass);
  localStorage.setItem("adminAdded", "true");
}

submit.addEventListener('click', (event) => {
  event.preventDefault();

  let email = txtemail.value;
  let pass = txtpass.value;

  if (email === adminEmail && pass === adminPass) {
    alert("Admin Login Successful");
    window.location.href = "../account_page/account_page.html";
    return;
  }

  let user_records = JSON.parse(localStorage.getItem("users")) || [];
  let user = user_records.find((user) => user.email === email && user.password === pass);

  if (user) {
    // User Login
    localStorage.setItem("loggedInUsername", user.username);
    localStorage.setItem("loggedInEmail", user.email);
    alert("Login Successful");
    window.location.href = "../account_page/account_page.html";
  } else {
    alert("Invalid Email or Password");
  }
});

function saveData(event) {
  event.preventDefault();

  let username = document.querySelector(".user").value;
  let email = document.querySelector(".email").value;
  let password = document.querySelector(".pass").value;

  let user_records = JSON.parse(localStorage.getItem("users")) || [];
  if (user_records.some((v) => v.email === email)) {
    alert("Duplicate Data");
  } else {
    user_records.push({
      "username": username,
      "email": email,
      "password": password
    });
    localStorage.setItem("users", JSON.stringify(user_records));
    alert("Registration Successful");
    loginBox.classList.remove('active');
  }
}

submit1.addEventListener('click', saveData);
