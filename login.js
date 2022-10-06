var loginLink = document.querySelector(".login-link");
var loginPopup = document.querySelector(".login-popup");

var loginClose = loginPopup.querySelector(".modal-close");
var loginForm = loginPopup.querySelector(".login-form");
var loginLogin = loginPopup.querySelector(".login-input");
var loginPassword = loginPopup.querySelector(".login-password");

var isStorageSupport = true;
var storage = "";


try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}

loginLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    loginPopup.classList.add("modal-show");
    loginLogin.focus();

    if (storage) {
        loginLogin.value = storage;
        loginPassword.focus();
    } else {
        loginLogin.focus();
    }
});

loginClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    loginPopup.classList.remove("modal-show");
    loginPopup.classList.remove("modal-error");
});

loginForm.addEventListener("submit", function (evt) {
    if (!loginLogin.value || !loginPassword.value) {
        evt.preventDefault();
        loginPopup.classList.add("modal-error");
        loginPopup.offsetWidth = loginPopup.offsetWidth;
    } else {
        if (isStorageSupport) {
            localStorage.setItem("login", loginLogin.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    console.log('>>>>>>')
    if (evt.keyCode === 27) {
        if (loginPopup.classList.contains("modal-show")) {
            evt.preventDefault();
            loginPopup.classList.remove("modal-show");
            loginPopup.classList.remove("modal-error");
        }
    }
});




