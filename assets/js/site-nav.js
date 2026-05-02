(function () {
  var burger = document.getElementById('site-nav-burger');
  var links = document.getElementById('site-nav-links');
  if (burger && links) {
    burger.addEventListener('click', function () {
      var open = links.classList.toggle('site-nav__links--open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Chip groups: clicking a .chip inside a chip group makes only that one active.
  var chipGroups = document.querySelectorAll('.cal-filters, .contact-form__chips');
  chipGroups.forEach(function (group) {
    group.addEventListener('click', function (e) {
      var chip = e.target.closest('.chip');
      if (!chip || !group.contains(chip)) return;
      group.querySelectorAll('.chip').forEach(function (c) { c.classList.remove('chip--active'); });
      chip.classList.add('chip--active');
      var radio = chip.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;
    });
  });
})();
