const form = document.querySelector('.content__form');
const emailInput = document.querySelector('.content__input');
const errorSpan = document.querySelector('.error');
const btn = document.querySelector('.content__btn');

emailInput.addEventListener('input', function () {
    if (emailInput.validity.valid) {
        errorSpan.textContent = '';
        btn.classList.remove('btn-disabled');
        btn.disabled = false;
        // errorSpan.classList.remove('error-active');
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
    if (emailInput.validity.valueMissing) {
        errorSpan.textContent = 'You need to enter an e-mail address.'
    } else if (emailInput.validity.typeMismatch) {
        errorSpan.textContent = 'Entered value needs to be an e-mail address.'
        console.log(emailInput.validity.typeMismatch)
    } else if (emailInput.validity.tooShort) {
        errorSpan.textContent = `Email should be at least ${emailInput.minLength} characters; you entered ${emailInput.value.length}.`
    }
    btn.classList.add('btn-disabled');
    btn.disabled = true;
    // errorSpan.classList.add('error-active')
}

btn.addEventListener('click', function (evt) {
    evt.preventDefault();
    console.log(emailInput.value)
})