const registrationForm = document.getElementById('registrationForm');
const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', () => {
  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirmPassword = document.getElementById('confirmPassword').value.trim();
  const dateOfBirth = document.getElementById('dateOfBirth').value.trim();
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const termsAndConditions = document.getElementById('termsAndConditions').checked;

  // Validate form fields
  let errors = [];

  if (!firstName) {
    errors.push('First name is required.');
  }

  if (!lastName) {
    errors.push('Last name is required.');
  }

  if (!email.match(/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    errors.push('Please enter a valid email address.');
  }

  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long.');
  }

  if (password !== confirmPassword) {
    errors.push('Passwords must match.');
  }

  if (!dateOfBirth) {
    errors.push('Date of birth is required.');
  }

  if (!gender) {
    errors.push('Please select a gender.');
  }

  if (!termsAndConditions) {
    errors.push('Please agree to the terms and conditions.');
  }

  // Display errors if any
  if (errors.length > 0) {
    const errorMessage = errors.join('<br>');
    alert(errorMessage);
    return;
  }

  // Submit form if no errors
  registrationForm.submit();
});
