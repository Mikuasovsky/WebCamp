document.addEventListener('DOMContentLoaded', function () {
  const menu = document.querySelector('#mobile-menu');
  const menuLinks = document.querySelector('.navbar_menu');

  menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
  });

  
  function populateUserProfile() {
    const loggedInUsername = localStorage.getItem('loggedInUsername');
    const loggedInEmail = localStorage.getItem('loggedInEmail');

    const usernameElement = document.getElementById('profile-username');
    const emailElement = document.getElementById('profile-email');
    const profileImg = document.getElementById('profile-image');

    if (loggedInUsername && loggedInEmail) {
      usernameElement.textContent = loggedInUsername;
      emailElement.textContent = loggedInEmail;
    } else {
      usernameElement.textContent = '';
      emailElement.textContent = '';
    }

    
    const profileImage = localStorage.getItem('profileImage');
    if (profileImage) {
      profileImg.src = profileImage;
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

  
  function updateProfileImage(file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const profileImg = document.getElementById('profile-image');
      profileImg.src = e.target.result;

      
      localStorage.setItem('profileImage', e.target.result);
    };

    reader.readAsDataURL(file);
  }

  
  function logout() {
    localStorage.removeItem('loggedInUsername');
    localStorage.removeItem('loggedInEmail');
    localStorage.removeItem('profileImage');
    window.location.href = '/login_page/login_page.html';
  }

  
  document.getElementById('logout-link').addEventListener('click', function (event) {
    event.preventDefault(); 
    logout(); 
  });
});
