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
  //console.log("Supported...")
  localStorage.setItem("email", "admin@example.com");
  localStorage.setItem("pass", "admin123");
  
  let email = localStorage.getItem("email");
  let pass = localStorage.getItem("pass");

  let message = localStorage.getItem(".message");

  submit.addEventListener('click', () => {
    if(email == txtemail.value && pass == txtpass.value){
      message.innerHTML ="Login Successfull!";
    }else{
      message.innerHTML ="Username or Password Invalid!";
    }
  })

}else{
  console.log("Not Supported...")
}
