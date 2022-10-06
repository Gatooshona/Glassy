var loginLink = document.querySelector(".login-link");
var loginPopup = document.querySelector(".login-popup");

var loginClose = loginPopup.querySelector(".modal-close");
var loginForm = loginPopup.querySelector(".login-form");
var loginLogin = loginPopup.querySelector(".login-input");
var loginPassword = loginPopup.querySelector(".login-password");

var isStorageSupport = true;
var storage = "";

var feedbackLink = document.querySelector(".contacts-button");
var feedbackPopup = document.querySelector(".feedback");
var feedbackClose = document.querySelector(".close-button");
var feedbackName = document.querySelector(".feedback-name");
var feedbackForm = document.querySelector(".form-action-1");
var feedbackMail = document.querySelector(".feedback-mail");
var feedbackText = document.querySelector(".feedback-text-input");


try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}

try {
    storage = localStorage.getItem("feedback");
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
    if (evt.keyCode === 27) {
        if (loginPopup.classList.contains("modal-show")) {
            evt.preventDefault();
            loginPopup.classList.remove("modal-show");
            loginPopup.classList.remove("modal-error");
        }
    }
});


feedbackLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.add("feedback-modal-show");
    feedbackName.focus();
});

feedbackClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.remove("feedback-modal-show");
    feedbackPopup.classList.remove("feedback-modal-error");
});

feedbackForm.addEventListener("submit", function (evt) {
    if (!feedbackName.value || !feedbackMail.value || !feedbackText.value) {
        evt.preventDefault();
        feedbackPopup.classList.remove("feedback-modal-error");
        feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
        feedbackPopup.classList.add("feedback-modal-error");
    }
    // else {
    //     localStorage.setItem("name", feedbackName.value);
    // }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (loginPopup.classList.contains("feedback-modal-show")) {
            evt.preventDefault();
            loginPopup.classList.remove("feedback-modal-show");
            loginPopup.classList.remove("feedback-modal-error");
        }
    }
})

