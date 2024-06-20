document.addEventListener('DOMContentLoaded', function () {
  const menu = document.querySelector('#mobile-menu');
  const menuLinks = document.querySelector('.navbar_menu');

  function checkLogIn() {
    // if (localStorage.getItem('loggedInUsername') === null || !localStorage.getItem('loggedInEmail') === 'null'){
    //   window.location.href = 'login_page.html';
    // }
    // console.log('User is logged in');
  }

  menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
  });

  function getAllUserInfo() {
    const users = JSON.parse(localStorage.getItem("users"));
    return users;
  }

  console.log(getAllUserInfo());
  function populateUserProfile() {
    const loggedInUsername = localStorage.getItem('loggedInUsername');
    const loggedInEmail = localStorage.getItem('loggedInEmail');
    updateStatus(loggedInUsername);
    
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

  function updateStatus(username){
    let users = JSON.parse(localStorage.getItem("users"));
    let user = users.find((user) => user.username === username);
    user.status = "Logged In";
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

  function updateStatus(username){
    let users = JSON.parse(localStorage.getItem("users"));
    let user = users.find((user) => user.username === username);
    user.status = "Logged out";
    localStorage.setItem("users", JSON.stringify(users));
  }


  function logout() {
    updateStatus(localStorage.getItem('loggedInUsername'));      
    localStorage.removeItem('loggedInUsername');
    localStorage.removeItem('loggedInEmail');
    window.location.href = '/login_page.html';
  }

  document.getElementById('logout-link').addEventListener('click', function (event) {
    event.preventDefault();
    logout();
  });
});
