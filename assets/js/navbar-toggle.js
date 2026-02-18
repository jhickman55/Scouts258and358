// Mobile hamburger menu toggle for Bulma navbar
document.addEventListener('DOMContentLoaded', function () {
  var burgers = document.querySelectorAll('.navbar-burger');

  burgers.forEach(function (burger) {
    burger.addEventListener('click', function () {
      var targetId = burger.dataset.target;
      var target = document.getElementById(targetId);

      burger.classList.toggle('is-active');
      target.classList.toggle('is-active');
    });
  });
});
