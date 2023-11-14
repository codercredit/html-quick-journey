"use strict";
(function () {

  document.addEventListener('DOMContentLoaded', function () {
    const themeSwitch = document.getElementById('theme-switch');
    const body = document.body;

    // Check if the element with id 'my-theme' exists
    const myThemeElement = document.getElementById('theme-options');
    if (myThemeElement) {
      const currentTheme = localStorage.getItem('theme') || 'light';
      body.setAttribute('data-bp-theme', currentTheme);
      updateStylesForTheme(currentTheme);

      // If 'my-theme' exists, display the theme-switch
      themeSwitch.style.display = 'block';
    } else {
      // If 'my-theme' doesn't exist, hide the theme-switch
      themeSwitch.style.display = 'none';
    }

    themeSwitch.addEventListener('click', toggleTheme);

    function toggleTheme() {
      const newTheme = body.getAttribute('data-bp-theme') === 'light' ? 'dark' : 'light';
      body.setAttribute('data-bp-theme', newTheme);
      updateStylesForTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    }

    function updateStylesForTheme(theme) {
      if (theme === 'light') {
        body.classList.add('theme--light');
        body.classList.remove('theme--dark');
      } else {
        body.classList.remove('theme--light');
        body.classList.add('theme--dark');
      }
    }
  });




})();