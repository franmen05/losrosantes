/* Centro Educativo Los Rosantes - menu movil.
   Sin dependencias. El sitio funciona completo sin este archivo. */
(function () {
  'use strict';

  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (!toggle || !nav) return;

  var desktop = window.matchMedia('(min-width: 75rem)');

  function isOpen() {
    return toggle.getAttribute('aria-expanded') === 'true';
  }

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  toggle.addEventListener('click', function () {
    setOpen(!isOpen());
  });

  // Escape cierra el panel y devuelve el foco al boton
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && isOpen()) {
      setOpen(false);
      toggle.focus();
    }
  });

  // Cierra al elegir un enlace o al tocar fuera del encabezado
  nav.addEventListener('click', function (event) {
    if (event.target.closest('a')) setOpen(false);
  });
  document.addEventListener('click', function (event) {
    if (isOpen() && !event.target.closest('.site-header')) setOpen(false);
  });

  // Al pasar a escritorio el panel deja de existir: se restablece el estado
  var reset = function (event) {
    if (event.matches) setOpen(false);
  };
  if (desktop.addEventListener) desktop.addEventListener('change', reset);
  else if (desktop.addListener) desktop.addListener(reset);
})();
