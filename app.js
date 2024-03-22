// MODAL

function signupToggle(){
    var container = document.querySelector('.container');
    container.classList.toggle('active');
    var popup = document.querySelector('.signup-form');
    popup.classList.toggle('active');
}

function loginToggle(){
    var container = document.querySelector('.container');
    container.classList.toggle('active');
    var popup = document.querySelector('.login-form');
    popup.classList.toggle('active');
}

// TOGGLER BUTTON

function showSidebar(){
   var sidebar = document.querySelector('.sidebar')
   sidebar.style.display = 'block'
}
function hideSidebar(){
   var sidebar = document.querySelector('.sidebar')
   sidebar.style.display = 'none'
}

// LOCALSTORAGE

function objStore(){

    var first_name = document.getElementById("first_name").value
    var last_name = document.getElementById("last_name").value
    var input_email = document.getElementById("input_email").value
    var input_password = document.getElementById("input_password").value

    localStorage.setItem("First-Name", first_name);
    localStorage.setItem("Last-Name", last_name);
    localStorage.setItem("Email-Address", input_email);
    localStorage.setItem("Password", input_password);

}