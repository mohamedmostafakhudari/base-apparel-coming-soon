const submitBtn = document.getElementById('submit');
const form = document.querySelector('form');
const email = document.querySelector('#email');
const emailError = document.querySelector('#email + span.error');
email.addEventListener('input', (e) => {
    if (email.validity.valid) {
        emailError.textContent = '';
        emailError.classList.remove('active');
    } else {
        showError();
    }
})
form.addEventListener('submit', (e) => {
    if (!email.validity.valid || !email.value) {
        showError();
        e.preventDefault();
    }
});
function showError() {
    if (!email.value) {
        emailError.textContent = 'You need to enter an e-mail address.';
    } else if (email.validity.typeMismatch) {
        emailError.textContent = 'Please provide a valid email';
    }
    emailError.classList.add('active');
}