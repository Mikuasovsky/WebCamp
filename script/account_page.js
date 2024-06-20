document.addEventListener('DOMContentLoaded', function () {
  const menu = document.querySelector('#mobile-menu');
  const menuLinks = document.querySelector('.navbar_menu');  
  const submit = document.querySelector('.btn-save');

  function checkLogIn() {
    if (localStorage.getItem('loggedInUsername') === null || !localStorage.getItem('loggedInEmail') === 'null'){
      window.location.href = 'login_page.html';
    }
    console.log('User is logged in');
  }

  checkLogIn();

  menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
  });

  function getAllUserInfo() {
    const users = JSON.parse(localStorage.getItem("users"));
    return users;
  }


  function populateUserProfile() {
    user = getUser(localStorage.getItem('loggedInUsername'));  
    console.log(user);

    const loggedInUsername = localStorage.getItem('loggedInUsername');
    const loggedInEmail = localStorage.getItem('loggedInEmail');
    updateStatus(loggedInUsername,'Logged In');
    
    const usernameElement = document.getElementById('profile-username');
    const emailElement = document.getElementById('profile-email');
    const profileImg = document.getElementById('profile-image');

    if (loggedInUsername && loggedInEmail) {
      usernameElement.textContent = loggedInUsername;
      emailElement.textContent = loggedInEmail;

      
      const profileImage = localStorage.getItem(`profileImage_${loggedInEmail}`);
      if (profileImage) {
        profileImg.src = profileImage;
      } else {
        profileImg.src = '/assets/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg';
      }
    } else {
      usernameElement.textContent = '';
      emailElement.textContent = '';
      profileImg.src = '/assets/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg'; 
    }
    document.getElementById('username').placeholder = user.username;
    document.getElementById('email').placeholder = user.email;

    document.getElementById('password').placeholder = buildStringPassword(user.password);
    document.getElementById('address').placeholder = user.address;

  }

  function buildStringPassword(password){
    let passwordString = "";
    for(let i = 0; i < password.length; i++){
      passwordString += "*";
    }
    return passwordString;
  }

  populateUserProfile();

  document.getElementById('btn-upload').addEventListener('click', function () {
    const fileInput = document.getElementById('image-upload');
    const file = fileInput.files[0];

    if (file) {
      updateProfileImage(file);
    } else {
      alert('Please select an image file.');
    }
  });

  function updateStatus(username,status){
    let users = JSON.parse(localStorage.getItem("users"));
    let user = users.find((user) => user.username === username);
    user.status = status;
    localStorage.setItem("users", JSON.stringify(users));
  }

  function updateProfileImage(file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const profileImg = document.getElementById('profile-image');
      profileImg.src = e.target.result;

      const loggedInEmail = localStorage.getItem('loggedInEmail');
      if (loggedInEmail) {
        localStorage.setItem(`profileImage_${loggedInEmail}`, e.target.result);
      }
    };

    reader.readAsDataURL(file);
  }

  function getUser(username) {
    let users = JSON.parse(localStorage.getItem("users"));
    let user = users.find((user) => user.username === username);
    return user;
  }


  function updateProfile(event){
    event.preventDefault();

    let users = JSON.parse(localStorage.getItem("users"));
    let user = users.find((user) => user.username === localStorage.getItem('loggedInUsername'));
    let username = document.getElementById('username').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();
    let address = document.getElementById('address').value.trim();

    if(username){
      user.username = username;
    }
    if(email){
      user.email = email;
    }
    if(password){
      user.password = password;
    }
    if(address){
      user.address = address;
    }
    localStorage.setItem("users", JSON.stringify(users));
    alert("Profile Updated Successfully, please sign in again!");
    window.location.href = '/login_page.html';
  
  }

  function logout() {
    updateStatus(localStorage.getItem('loggedInUsername'),'Logged Out');      
    localStorage.removeItem('loggedInUsername');
    localStorage.removeItem('loggedInEmail');
    window.location.href = '/login_page.html';
  }

  document.getElementById('logout-link').addEventListener('click', function (event) {
    event.preventDefault();
    logout();
  });

  submit.addEventListener('click', updateProfile);

});
