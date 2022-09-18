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
    return true;
  } else {
    username_check.style.color = 'red';
    usernameInput.style.borderColor = 'red';
    return false;
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
    return true;
  } else {
    passwordInput.style.borderColor = 'red';
    pw_check.style.color = 'red';
    return false;
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
    return true;
  } else {
    confirmPasswordInput.style.borderColor = 'red';
    confirmPasswordCheck.innerHTML = 'Passwords do not match!';
    confirmPasswordCheck.style.color = 'red';
    return false;
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

// Popup showup on submission of form
const submitForm = () => {
  if (!validateUsername()) alert('Invalid Username');
  else if (!validatePassword())
    alert(
      `Password must contain 8 characters that include at least 1 lowercase, 1 uppercase, 1 number and 1 special character(!@#$%^&*)`
    );
  else if (!confirmPassword()) alert('Passwords do not match!');
  else alert('You have signed up succesfully');
};
