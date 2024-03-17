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

