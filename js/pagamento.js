(() => {
  const sessao = Armazenamento.lerSessaoSelecionada();
  if (sessao) {
    document.getElementById('summaryMovie').textContent = sessao.filme;
    document.getElementById('summaryTime').textContent = sessao.horario;
  }

  const pedido = Armazenamento.lerPedido();
  if (pedido) {
    document.getElementById('summarySeats').textContent = pedido.assentos.join(', ');
    document.getElementById('summaryTotal').textContent = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(pedido.total);
  }

  const radios = document.querySelectorAll('input[name="metodo"]');
  const panels = { pix: document.getElementById('pixPanel'), bilheteria: document.getElementById('bilheteriaPanel'), cartao: document.getElementById('cartaoPanel') };
  const ticketCode = document.getElementById('ticketCode');
  let code = '';
  function makeCode() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let result = 'SENAC-';
    for (let i = 0; i < 6; i++) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  }
  function updateMethod() {
    const selected = document.querySelector('input[name="metodo"]:checked').value;
    Object.entries(panels).forEach(([key, panel]) => panel.hidden = key !== selected);
    if (selected === 'bilheteria' && !code) { code = makeCode(); ticketCode.textContent = code; }
  }
  radios.forEach(radio => radio.addEventListener('change', updateMethod));
  document.getElementById('finishPayment').addEventListener('click', () => {
    const method = document.querySelector('input[name="metodo"]:checked').value;
    if (method === 'bilheteria' && !code) { code = makeCode(); ticketCode.textContent = code; }
    const params = new URLSearchParams({ metodo: method, codigo: code || 'DEMO-' + Math.random().toString(36).slice(2, 8).toUpperCase() });
    window.location.href = 'confirmacao.html?' + params.toString();
  });
  updateMethod();
})();
