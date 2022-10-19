
/**
 * 1. Находит селектором попап логина
 * 2. При клике на него добавляем класс с цсс дисплей блок
 * 3. При клике на облавсть вне попапа, удаляем класс видимости с попапа логина
 * 4. При нажатии на самбит, созраняет логин в local storage и отправляем данные (при сабмите происходит автоматом)
 * */

var loginOpenLink = document.querySelector(".login-link");
var loginPopup = document.querySelector(".login-popup");
var loginName = document.querySelector(".login-input");



loginOpenLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    loginPopup.classList.add("login-modal-show");
    modalDark.classList.add("modal-dark-show");
    loginName.focus();
})

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (loginPopup.classList.contains("login-modal-show")) {
            evt.preventDefault();
            loginPopup.classList.remove("login-modal-show");
            modalDark.classList.remove("modal-dark-show");
        }
    }
});

modalDark.addEventListener("click", function (evt) {
    loginPopup.classList.remove("login-modal-show");
    modalDark.classList.remove("modal-dark-show");
})






