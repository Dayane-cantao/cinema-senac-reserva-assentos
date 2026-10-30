function montarFileira(fileira,padrao){
    const linha = document.createElement('div');
    linha.className = 'seat-row';
    linha.dataset.fileira = fileira;
    const rotulo = document.createElement('span');
    rotulo.className = 'row-label';
    rotulo.textContent = fileira;
    linha.appendChild(rotulo);
    let numero = 0;
    for (const letra of padrao) {
        if (letra === 'S') {
        numero++;
        const id = `${fileira}${numero}`;
        const poltrona = document.createElement('button');
        poltrona.type ='button';
        poltrona.className = 'seat';
        poltrona.dataset.id = `${fileira}${numero}`;
        poltrona.textContent = numero;
        poltrona.setAttribute('aria-label', `Fileira ${fileira}, poltrona ${numero}, disponível`);
        poltrona.setAttribute('aria-pressed', 'false');
        if (OCUPADOS.includes(id)) {
        poltrona.classList.add('occupied');
        poltrona.disabled = true;
        poltrona.setAttribute('aria-label', `Fileira ${fileira}, poltrona ${numero}, ocupada`);
        }
        linha.appendChild(poltrona);
        } else {
        const espaco = document.createElement('span');
        espaco.className = 'seat-gap';
        linha.appendChild(espaco);
        }
    }
        return linha;
}
const PLANTA = [
    { fileira: 'A', padrao: 'SS..SSSSSSSSSSSSSSSS..SSSS' },
    { fileira: 'B', padrao: 'SS..SSSSSSSSSSSSSSSS..SSSS' },
    { corredor: true },
    { fileira: 'C', padrao: 'SS....SSSSSSSSSSSS........' },
    { fileira: 'D', padrao: 'SS..SSSSSSSSSSSSSSSS......' },
    { fileira: 'E', padrao: '....SSSSSSSSSSSSSSSS......' },
    { fileira: 'F', padrao: '....SSSSSSSSSSSSSSSS......' },
    { fileira: 'G', padrao: '....SSSSSSSSSSSSSSSS......' },
    { fileira: 'H', padrao: '....SSSSSSSSSSSSSSSS......' },
    { fileira: 'I', padrao: 'SS..SSSSSSSSSSSSSSSS..SSSS' },
    { fileira: 'J', padrao: 'SS..SSSSSSSSSSSSSSSS..SSSS' },
    { fileira: 'K', padrao: 'SS..SSSSSSSSSSSSSSSS..SSSS' },
    { fileira: 'L', padrao: 'SS..SSSSSSSSSSSSSSSS..SSSS' },
    { fileira: 'M', padrao: 'SS..SSSSSSSSSSSSSSSS..SSSS' },
    { fileira: 'N', padrao: 'SS..SSSSSSSSSSSSSSSS..SSSS' },
    { fileira: 'O', padrao: 'SSSSSSSSSSSS..SSSSSSSSSSSS' },
];
function montarMapa() {
    const mapa = document.getElementById('seatMap');
    mapa.replaceChildren()
    for (const item of PLANTA) {
        if (item.corredor) {
            const corredor = document.createElement('div');
            corredor.className = 'seat-aisle';
            mapa.appendChild(corredor);
        } else {
            const fileira = montarFileira(item.fileira, item.padrao);
            mapa.appendChild(fileira);
        }
    }
}
const OCUPADOS = ['F5', 'A6', 'G7', 'H16', 'I3', 'J20', 'K10', 'L16', 'M18', 'N17', 'O8'];
montarMapa();
const btnNumeros = document.getElementById('btnNumeros');
btnNumeros.addEventListener('click', () => {
    const mapa = document.getElementById('seatMap');
    const escondido = mapa.classList.toggle('sem-numeros');
    btnNumeros.setAttribute('aria-checked', !escondido);
});
const PRECO_INGRESSO = 55.00;
const selecionados = [];
function alternarAssento(id) {
    if (selecionados.includes(id)) {
        const index = selecionados.indexOf(id);
        selecionados.splice(index, 1);
    } else {
        selecionados.push(id);
    }
}
function compararAssentos(a, b) {
    const fileiraA = a[0];
    const fileiraB = b[0];
    const numeroA = Number(a.slice(1));
    const numeroB = Number(b.slice(1));
    if (fileiraA !== fileiraB) {
        return fileiraA.localeCompare(fileiraB);
    } else {
        return numeroA - numeroB;
    }
}

function atualizarResumo() {
    const painel = document.getElementById('selectedSeats');
    if (selecionados.length === 0) {
        painel.textContent = 'Nenhum assento selecionado';
    } else {
        painel.textContent = [...selecionados].sort(compararAssentos).join(', ');
    }
    const total = PRECO_INGRESSO * selecionados.length;
    const painelTotal = document.getElementById('totalPrice');
    painelTotal.textContent = formatarMoeda(total);
}
function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
const mapaAssentos = document.getElementById('seatMap');
mapaAssentos.addEventListener('click', (evento) => {
    const poltrona = evento.target.closest('.seat');
    if (poltrona === null || poltrona.classList.contains('occupied')) {
        return;
    }
    alternarAssento(poltrona.dataset.id);
    const marcada = selecionados.includes(poltrona.dataset.id);
    poltrona.classList.toggle('chosen', marcada);
    poltrona.setAttribute('aria-pressed', marcada);
    atualizarResumo();
});
