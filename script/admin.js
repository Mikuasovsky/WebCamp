const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar_menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

function checkUser() {
  // if (localStorage.getItem('loggedInUsername') === null || !localStorage.getItem('loggedInEmail') === 'admin@web.camp'){
  //   window.location.href = 'login_page.html';
  // }
  // console.log('User is logged in');
}

function tableCreate() {
  const body = document.getElementById("main_content"),
    tbl = document.createElement("table");

  tbl.className = "user_table";

  const thead = document.createElement("th");
  const thRow = tbl.insertRow();
  thRow.className = "table_header";
  th = thRow.insertCell();
  th.appendChild(document.createTextNode("Username"));
  th = thRow.insertCell();
  th.appendChild(document.createTextNode("Email"));
  th = thRow.insertCell();
  th.appendChild(document.createTextNode("Logged in"));
  th = thRow.insertCell();
  th.appendChild(document.createTextNode("Actions"));

  tbl.appendChild(thead);

  const users = getAllUserInfo();

  if (users === null || users.length === 0) {
    const tr = tbl.insertRow();
    tr.className = "table_row";
    td = tr.insertCell();
    td.appendChild(document.createTextNode("No users found"));
    td.colSpan = 4;
    td.style.textAlign = "center";
    td.style.fontWeight = "bold";
    td.style.fontSize = "20px";
    td.style.padding = "10px";
    body.appendChild(tbl);
    return;
  }

  users.forEach((user) => {
    const tr = tbl.insertRow();
    tr.className = "table_row";
    td = tr.insertCell();
    td.appendChild(document.createTextNode(user.username));
    td = tr.insertCell();
    td.appendChild(document.createTextNode(user.email));
    td = tr.insertCell();
    if (user.loggedIn){
      td.appendChild(document.createTextNode("Yes"));
    } else{
      td.appendChild(document.createTextNode("No"));
    }
    td = tr.insertCell();
    const btn = document.createElement("button");
    btn.className = "btn_delete";
    btn.innerHTML = "Delete";
    btn.onclick = function () {
      deleteUser(user.username);
    };
    td.appendChild(btn);
  });

  body.appendChild(tbl);
}

function deleteUser(username) {
  const users = JSON.parse(localStorage.getItem("users"));
  const newUsers = users.filter((user) => user.username !== username);
  localStorage.setItem("users", JSON.stringify(newUsers));
  window.location.reload();
}

function getAllUserInfo() {
  const users = JSON.parse(localStorage.getItem("users"));
  return users;
}

tableCreate();
checkUser();
