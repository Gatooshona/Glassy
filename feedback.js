var feedbackLink = document.querySelector(".contacts-button");
var feedbackPopup = document.querySelector(".feedback");
var feedbackClose = document.querySelector(".close-button");
var feedbackName = document.querySelector(".feedback-name");
var feedbackForm = document.querySelector(".form-action-1");
var feedbackMail = document.querySelector(".feedback-mail");
var feedbackText = document.querySelector(".feedback-text-input");

try {
    storage = localStorage.getItem("feedback");
} catch (err) {
    isStorageSupport = false;
}

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
