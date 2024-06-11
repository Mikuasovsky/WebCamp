const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')

menu.addEventListener('click', function () {
  menu.classList.toggle('is-active')
  menuLinks.classList.toggle('active')
});

const loginBox = document.querySelector('.login-box')
const loginLink = document.querySelector('.login-link')
const registerLink = document.querySelector('.register-link')
const btnPopup = document.querySelector('.btnLogin-popup')
const iconClose = document.getElementById('iconClose')



registerLink.addEventListener('click',  () => {
  loginBox.classList.add('active');
});

loginLink.addEventListener('click',  () => {
  loginBox.classList.remove('active');
});

btnPopup.addEventListener('click',  () => {
  loginBox.classList.add('active-popup');
});

iconClose.addEventListener('click',  () => {
  loginBox.classList.remove('active-popup');
});