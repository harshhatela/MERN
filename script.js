// ===== Hamburger Menu Toggle =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close menu when a nav link is clicked (mobile)
navLinks.addEventListener('click', function (e) {
  if (e.target.tagName === 'A') {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  }
});

// ===== Contact Form Validation =====
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
const successMsg = document.getElementById('success-msg');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Reset
  clearErrors();
  successMsg.textContent = '';

  let isValid = true;

  // Name validation
  if (nameInput.value.trim() === '') {
    showError(nameInput, nameError, 'Name is required.');
    isValid = false;
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailInput.value.trim() === '') {
    showError(emailInput, emailError, 'Email is required.');
    isValid = false;
  } else if (!emailPattern.test(emailInput.value.trim())) {
    showError(emailInput, emailError, 'Please enter a valid email address.');
    isValid = false;
  }

  // Message validation
  if (messageInput.value.trim() === '') {
    showError(messageInput, messageError, 'Message is required.');
    isValid = false;
  } else if (messageInput.value.trim().length < 10) {
    showError(messageInput, messageError, 'Message must be at least 10 characters.');
    isValid = false;
  }

  // Success
  if (isValid) {
    successMsg.textContent = 'Thank you! Your message has been sent successfully.';
    form.reset();
  }
});

function showError(input, errorSpan, message) {
  input.classList.add('input-error');
  errorSpan.textContent = message;
}

function clearErrors() {
  var inputs = [nameInput, emailInput, messageInput];
  var errors = [nameError, emailError, messageError];

  for (var i = 0; i < inputs.length; i++) {
    inputs[i].classList.remove('input-error');
    errors[i].textContent = '';
  }
}
