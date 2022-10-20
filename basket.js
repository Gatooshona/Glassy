var basketLink =  document.querySelector(".search-button-3");
var basketPopup = document.querySelector(".basket-section");
var modalDark = document.querySelector(".modal-dark");

basketLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    basketPopup.classList.add("basket-section-show");
    modalDark.classList.add("modal-dark-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (basketPopup.classList.contains("basket-section-show")) {
            evt.preventDefault();
            basketPopup.classList.remove("basket-section-show");
            modalDark.classList.remove("modal-dark-show");
        }
    }
});

modalDark.addEventListener("click", function (evt) {
    basketPopup.classList.remove("basket-section-show");
    modalDark.classList.remove("modal-dark-show");
});