const form = document.querySelector('.content__form');
const emailInput = document.querySelector('.content__input');
const errorSpan = document.querySelector('.error');

emailInput.addEventListener('input', function (evt) {
    if (emailInput.validity.valid) {
        errorSpan.textContent = '';
        errorSpan.classList.remove('error-active');
    } else {
        showError();
    }
})

form.addEventListener('submit', function (evt) {
    if (emailInput.validity.valid) {
        showError();
        evt.preventDefault();
    }
})

function showError() {

}