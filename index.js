// Validating username if username has length of atleast 3 and atmax of 25
const validateUsername = () => {
  let usernameInput = document.forms['signup-form']['username'];
  const username_check = document.getElementById('username_check');

  if (usernameInput.value.length == 0) {
    username_check.style.color = 'rgb(134, 134, 134)';
    usernameInput.style.borderColor = 'rgb(134, 134, 134)';
  } else if (usernameInput.value.length > 3 && usernameInput.value.length < 25) {
    username_check.style.color = 'green';
    usernameInput.style.borderColor = 'green';
  } else {
    username_check.style.color = 'red';
    usernameInput.style.borderColor = 'red';
  }
};

// Checking if password is a valid password
const validatePassword = () => {
  let passwordInput = document.forms['signup-form']['password'];
  const pw_check = document.getElementById('passwordCheck');
  const pw_match = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,30}$/;

  if (passwordInput.value.match(pw_match)) {
    passwordInput.style.borderColor = 'green';
    pw_check.style.color = 'green';
  } else {
    passwordInput.style.borderColor = 'red';
    pw_check.style.color = 'red';
  }
};

// Checking if password and confirm password match or not
const confirmPassword = () => {
  const passwordInput = document.forms['signup-form']['password'];
  const confirmPasswordCheck = document.getElementById('confirmPasswordCheck');
  let confirmPasswordInput = document.forms['signup-form']['confirm_password'];

  if (passwordInput.value === confirmPasswordInput.value) {
    confirmPasswordInput.style.borderColor = 'green';
    confirmPasswordCheck.innerHTML = '';
  } else {
    confirmPasswordInput.style.borderColor = 'red';
    confirmPasswordCheck.innerHTML = 'Passwords do not match!';
    confirmPasswordCheck.style.color = 'red';
  }
};

// Toggling password view, hiding and showing password
const togglePasswordVisivility = () => {
  const eye = document.getElementById('toggle_password');
  const passwordInput = document.forms['signup-form']['password'];

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    eye.classList.add('fa-eye');
    eye.classList.remove('fa-eye-slash');
  } else {
    passwordInput.type = 'password';
    eye.classList.add('fa-eye-slash');
    eye.classList.remove('fa-eye');
  }
};
