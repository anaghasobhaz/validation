function validatePassword() {
    var passwordInput = document.getElementById('password');
    var passwordMessage = document.getElementById('passwordMessage');
    var submitButton = document.querySelector('button[type="submit"]');

    
    passwordInput.style.borderColor = '';
    passwordMessage.innerHTML = '';

    
    var minLength = 8;
    var hasLetter = /[a-zA-Z]/.test(passwordInput.value);
    var hasNumber = /\d/.test(passwordInput.value);

    
    if (passwordInput.value.length < minLength) {
        passwordInput.style.borderColor = 'red';
        passwordMessage.innerHTML = 'Password must be at least ' + minLength + ' characters long.';
        submitButton.disabled = true;
    } else if (!hasLetter || !hasNumber) {
        passwordInput.style.borderColor = 'red';
        passwordMessage.innerHTML = 'Password must contain both letters and numbers.';
        submitButton.disabled = true;
    } else {
        passwordInput.style.borderColor = 'green';
        passwordMessage.innerHTML = 'Password is valid.';
        submitButton.disabled = false;
    }
}


document.getElementById('passwordForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Form submitted!');
});
