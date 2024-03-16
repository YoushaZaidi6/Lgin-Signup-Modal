function signupToggle(){
    var container = document.querySelector('.container');
    container.classList.toggle('active');
    var signupPopup = document.querySelector('.signup-form');
    var loginPopup = document.querySelector('.login-form');
    
    if (loginPopup.classList.contains('active')) {
        loginPopup.classList.remove('active');
    }

    signupPopup.classList.toggle('active');
}

function loginToggle(){
    var container = document.querySelector('.container');
    container.classList.toggle('active');
    var signupPopup = document.querySelector('.signup-form');
    var loginPopup = document.querySelector('.login-form');

    if (signupPopup.classList.contains('active')) {
        signupPopup.classList.remove('active');
    }

    loginPopup.classList.toggle('active');
}

