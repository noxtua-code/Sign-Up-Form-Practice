const pwdInput = document.querySelector('#pwd');
const confirmPwdInput = document.querySelector('#confirm-pwd');
const pwdLabel = document.querySelector('#pwd-label');

function confirmPasswordsMatch(passwordOne, passwordTwo, label) {
    if (passwordOne.value != passwordTwo.value) {
        label.className = 'error';
        passwordOne.setCustomValidity('Invalid field');
        passwordTwo.setCustomValidity('Invalid field');
    } else {
        label.className = '';
        passwordOne.setCustomValidity('');
        passwordTwo.setCustomValidity('');
    }
};

confirmPwdInput.addEventListener('input', () => {
    confirmPasswordsMatch(pwdInput, confirmPwdInput, pwdLabel);
});

pwdInput.addEventListener('input', () => {
    confirmPasswordsMatch(pwdInput, confirmPwdInput, pwdLabel);
});