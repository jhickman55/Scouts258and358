// Login form handler
document.addEventListener('DOMContentLoaded', function () {
  var loginForm = document.getElementById('login-form');
  var errorMessage = document.getElementById('login-error');
  var submitButton = document.getElementById('login-submit');
  var forgotLink = document.getElementById('forgot-password');
  var emailInput = document.getElementById('login-email');
  var passwordInput = document.getElementById('login-password');

  // Check if already logged in
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      redirectAfterLogin();
    }
  });

  // Handle login form submission
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    errorMessage.style.display = 'none';
    submitButton.classList.add('is-loading');

    var email = emailInput.value.trim();
    var password = passwordInput.value;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function () {
        redirectAfterLogin();
      })
      .catch(function (error) {
        submitButton.classList.remove('is-loading');
        var message = 'Login failed. Please check your email and password.';
        if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') {
          message = 'Invalid email or password. Please try again.';
        } else if (error.code === 'auth/too-many-requests') {
          message = 'Too many failed attempts. Please try again later.';
        }
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
      });
  });

  // Handle forgot password
  forgotLink.addEventListener('click', function (e) {
    e.preventDefault();
    var email = emailInput.value.trim();
    if (!email) {
      errorMessage.textContent = 'Please enter your email address first, then click "Forgot password."';
      errorMessage.style.display = 'block';
      return;
    }

    firebase.auth().sendPasswordResetEmail(email)
      .then(function () {
        errorMessage.className = 'notification is-success';
        errorMessage.textContent = 'Password reset email sent! Check your inbox.';
        errorMessage.style.display = 'block';
      })
      .catch(function (error) {
        var message = 'Could not send reset email. Please check the email address.';
        errorMessage.className = 'notification is-danger';
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
      });
  });

  // Redirect to the page they were trying to access, or Scout Portal
  function redirectAfterLogin() {
    var params = new URLSearchParams(window.location.search);
    var redirect = params.get('redirect');
    if (redirect) {
      window.location.href = redirect;
    } else {
      var baseUrl = document.querySelector('meta[name="baseurl"]');
      var base = baseUrl ? baseUrl.getAttribute('content') : '';
      window.location.href = base + '/scout-portal/';
    }
  }
});
