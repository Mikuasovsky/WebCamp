document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('#mobile-menu');
  const menuLinks = document.querySelector('.navbar_menu');
  const txtemail = document.querySelector('.txt-email');
  const txtpass = document.querySelector('.txt-pass');
  const submit = document.querySelector('.btn-sub');
  const submit1 = document.querySelector('.btn-sub1');
  const rememberMe = document.querySelector('#remember-me'); // Select the "Remember Me" checkbox

  menu.addEventListener('click', () => {
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

  // Check if user credentials are stored in localStorage
  if (localStorage.getItem("rememberedEmail") && localStorage.getItem("rememberedPass")) {
    txtemail.value = localStorage.getItem("rememberedEmail");
    txtpass.value = localStorage.getItem("rememberedPass");
    rememberMe.checked = true; // Check the "Remember Me" checkbox if credentials are stored
  }

  submit.addEventListener('click', (event) => {
    event.preventDefault();

    let email = txtemail.value;
    let pass = txtpass.value;

    if (rememberMe.checked) {
      localStorage.setItem("rememberedEmail", email);
      localStorage.setItem("rememberedPass", pass);
    } else {
      localStorage.removeItem("rememberedEmail");
      localStorage.removeItem("rememberedPass");
    }

    if (email === adminEmail && pass === adminPass) {
      alert("Admin Login Successful");
      window.location.href = "../account_page/account_page.html";
      return;
    }

    let user_records = JSON.parse(localStorage.getItem("users")) || [];
    let user = user_records.find((user) => user.email === email && user.password === pass);

    if (user) {
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

    let username = document.querySelector(".user").value.trim();
    let email = document.querySelector(".email").value.trim();
    let password = document.querySelector(".pass").value.trim();
    let terms = document.querySelector("#terms").checked;

    if (!username || !email || !password) {
      alert("All fields are required!");
      return;
    }

    if (!terms) {
      alert("You must agree to the terms and conditions!");
      return;
    }

    let user_records = JSON.parse(localStorage.getItem("users")) || [];
    if (user_records.some((v) => v.email === email)) {
      alert("Email is already registered");
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
});
