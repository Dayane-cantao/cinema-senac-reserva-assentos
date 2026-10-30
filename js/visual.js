(function () {
  'use strict';

  function init() {
    iniciarCarrossel(document.querySelector('.movie-grid'));
    preencherResumoAssentos();
  }

  /*CARROSSEL: setas anterior / próximo*/
  function iniciarCarrossel(grid) {
    if (!grid || !grid.parentNode) return;

    var wrap = document.createElement('div');
    wrap.className = 'carrossel';
    grid.parentNode.insertBefore(wrap, grid);
    wrap.appendChild(grid);

    var prev = criarSeta('carrossel-seta carrossel-prev', 'Filmes anteriores', '\u2039');
    var next = criarSeta('carrossel-seta carrossel-next', 'Próximos filmes', '\u203A');
    wrap.appendChild(prev);
    wrap.appendChild(next);

    function passo() {
      var card = grid.querySelector('.movie-card');
      var gap = parseFloat(getComputedStyle(grid).columnGap) || 20;
      return (card ? card.offsetWidth : 280) + gap;
    }

    function atualizar() {
      var max = grid.scrollWidth - grid.clientWidth;
      wrap.classList.toggle('sem-rolagem', max <= 2);
      prev.disabled = grid.scrollLeft <= 2;
      next.disabled = grid.scrollLeft >= max - 2;
    }

    prev.addEventListener('click', function () {
      grid.scrollBy({ left: -passo(), behavior: 'smooth' });
    });
    next.addEventListener('click', function () {
      grid.scrollBy({ left: passo(), behavior: 'smooth' });
    });
    /* Arraste horizontal com mouse ou toque. Não interfere nos botões dos horários. */
    var pressionado = false;
    var inicioX = 0;
    var scrollInicial = 0;
    var arrastou = false;
    grid.addEventListener('pointerdown', function (event) {
      if (event.pointerType === 'mouse' && event.button !== 0) return;
      if (event.target.closest('button, a, input, select, textarea')) return;
      pressionado = true;
      arrastou = false;
      inicioX = event.clientX;
      scrollInicial = grid.scrollLeft;
      grid.classList.add('arrastando');
    });
    window.addEventListener('pointermove', function (event) {
      if (!pressionado) return;
      var deslocamento = event.clientX - inicioX;
      if (Math.abs(deslocamento) > 5) arrastou = true;
      if (arrastou) grid.scrollLeft = scrollInicial - deslocamento;
    }, { passive: true });
    function finalizarArraste() {
      if (!pressionado) return;
      pressionado = false;
      grid.classList.remove('arrastando');
      if (arrastou) {
        grid.dataset.dragged = 'true';
        window.setTimeout(function () { delete grid.dataset.dragged; }, 0);
      }
      atualizar();
    }
    window.addEventListener('pointerup', finalizarArraste);
    window.addEventListener('pointercancel', finalizarArraste);
    grid.addEventListener('click', function (event) {
      if (grid.dataset.dragged === 'true') {
        event.preventDefault();
        event.stopPropagation();
      }
    }, true);
    grid.addEventListener('scroll', atualizar, { passive: true });
    window.addEventListener('resize', atualizar);
    atualizar();
  }

  function criarSeta(classe, rotulo, texto) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = classe;
    b.setAttribute('aria-label', rotulo);
    b.textContent = texto;
    return b;
  }

  function preencherResumoAssentos() {
    var resumoFilme = document.getElementById('summaryMovie');
    var resumoHorario = document.getElementById('summaryTime');
    if (!resumoFilme || !resumoHorario) return;

    var parametros = new URLSearchParams(window.location.search);
    var filme = parametros.get('filme');
    var horario = parametros.get('horario');

    if (filme) resumoFilme.textContent = filme;
    if (horario) resumoHorario.textContent = horario;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();