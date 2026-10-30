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

      var titulo = filme.dataset.title || '';
      var horarioSelecionado = horario.dataset.time || horario.textContent.trim();
      if (!Armazenamento.salvarSessaoSelecionada(titulo, horarioSelecionado)) {
        window.alert('Não foi possível salvar o filme e o horário selecionados. Verifique as configurações de armazenamento do navegador e tente novamente.');
        return;
      }

      var parametros = new URLSearchParams({
        filme: titulo,
        horario: horarioSelecionado
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
