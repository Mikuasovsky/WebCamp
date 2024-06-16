const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')
let txtemail = document.querySelector('.txt-email')
let txtpass = document.querySelector('.txt-pass')
let submit = document.querySelector('.btn-sub')




menu.addEventListener('click', function () {
  menu.classList.toggle('is-active')
  menuLinks.classList.toggle('active')
});

const loginBox = document.querySelector('.login-box')
const loginLink = document.querySelector('.login-link')
const registerLink = document.querySelector('.register-link')


registerLink.addEventListener('click',  () => {
  loginBox.classList.add('active');
});

loginLink.addEventListener('click',  () => {
  loginBox.classList.remove('active');
});

if(window.localStorage){
  localStorage.setItem("email", "admin@web.camp");
  localStorage.setItem("pass", "admin");
  
  let email = localStorage.getItem("email");
  let pass = localStorage.getItem("pass");

  let message = localStorage.getItem(".message");

  submit.addEventListener('click', () => {
    if(email === txtemail.value && pass === txtpass.value){
      window.location.href = "../account_page/account_page.html";
    }else{
      alert("Invalid Email or Password");
    }
  })

}else{
  console.log("Not Supported...")
}
