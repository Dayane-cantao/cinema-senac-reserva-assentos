
(function () {
  'use strict';

  function iniciarSelecaoFilmeHorario() {
    var grid = document.querySelector('.movie-grid');
    if (!grid) return;

    grid.addEventListener('click', function (event) {
      var alvo = event.target;
      if (!(alvo instanceof Element)) return;

      var horario = alvo.closest('.time-btn');
      if (!horario) return;

      var filme = horario.closest('.movie-card');
      if (!filme) return;

      var parametros = new URLSearchParams({
        filme: filme.dataset.title || '',
        horario: horario.dataset.time || horario.textContent.trim()
      });
      window.location.href = 'pages/assentos.html?' + parametros.toString();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciarSelecaoFilmeHorario);
  } else {
    iniciarSelecaoFilmeHorario();
  }
})();
