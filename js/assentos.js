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