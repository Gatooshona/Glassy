var loginLink = document.querySelector(".login-link");
var loginPopup = document.querySelector(".login");
var loginClose = loginPopup.querySelector(".modal-close");
var loginLogin = loginPopup.querySelector(".")

loginLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    loginPopup.classList.add("modal-show");
});

loginClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    loginPopup.classList.remove("modal-show")
})

loginLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    loginPopup.classList.add("modal-show");
});

loginClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    loginPopup.classList.remove("modal-show")
})
