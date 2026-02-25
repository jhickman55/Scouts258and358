// Auth guard - checks Firebase auth state and protects page content
// Include this on any page that requires login

document.addEventListener('DOMContentLoaded', function () {
  firebase.auth().onAuthStateChanged(function (user) {
    var protectedContent = document.getElementById('protected-content');
    var loadingIndicator = document.getElementById('auth-loading');

    if (user) {
      // User is signed in - show the page content
      if (protectedContent) {
        protectedContent.style.display = 'block';
      }
      if (loadingIndicator) {
        loadingIndicator.style.display = 'none';
      }
    } else {
      // User is not signed in - redirect to login
      var currentPath = window.location.pathname;
      var baseUrl = document.querySelector('meta[name="baseurl"]');
      var base = baseUrl ? baseUrl.getAttribute('content') : '';
      window.location.href = base + '/auth/login/?redirect=' + encodeURIComponent(currentPath);
    }
  });
});
