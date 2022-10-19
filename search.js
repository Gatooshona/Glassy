var searchLink = document.querySelector(".search-button-1");
var searchPopup = document.querySelector(".search-box");
var modalDark = document.querySelector(".modal-dark");

searchLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    searchPopup.classList.add("search-popup-show");
    modalDark.classList.add("modal-dark-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (searchPopup.classList.contains("search-popup-show")) {
            evt.preventDefault();
            searchPopup.classList.remove("search-popup-show");
            modalDark.classList.remove("modal-dark-show");
        }
    }
});

modalDark.addEventListener("click", function (evt) {
    searchPopup.classList.remove("search-popup-show");
    modalDark.classList.remove("modal-dark-show");
});