const PRECO_INGRESSO = 55.00;
const selecionados = [];

const OCUPADOS = [
    'F5', 'A6', 'G7', 'H16', 'I3', 'J20',
    'K10', 'L16', 'M18', 'N17', 'O8'
];

function montarFileira(fileira, padrao) {
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

            poltrona.type = 'button';
            poltrona.className = 'seat';
            poltrona.dataset.id = id;
            poltrona.textContent = numero;

            poltrona.setAttribute(
                'aria-label',
                `Fileira ${fileira}, poltrona ${numero}, disponível`
            );

            if (OCUPADOS.includes(id)) {
                poltrona.classList.add('occupied');
                poltrona.disabled = true;

                poltrona.setAttribute(
                    'aria-label',
                    `Fileira ${fileira}, poltrona ${numero}, ocupada`
                );
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

    mapa.replaceChildren();

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

function alternarAssento(id) {
    if (selecionados.includes(id)) {
        const index = selecionados.indexOf(id);
        selecionados.splice(index, 1);
    } else {
        selecionados.push(id);
    }
}

function atualizarResumo() {
    const painel = document.getElementById('selectedSeats');
    const total = document.getElementById('totalPrice');

    if (selecionados.length === 0) {
        painel.textContent = 'Nenhum assento selecionado';
    } else {
        painel.textContent = selecionados.join(', ');
    }

    const valorTotal = selecionados.length * PRECO_INGRESSO;
    total.textContent = formatarMoeda(valorTotal);
}

function atualizarPedidoSalvo() {
    const total = selecionados.length * PRECO_INGRESSO;
    return Armazenamento.salvarPedido(selecionados, total);
}

function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}

// Montagem do mapa
montarMapa();

const mapa = document.getElementById('seatMap');
const sessao = Armazenamento.lerSessaoSelecionada();

if (sessao) {
    document.getElementById('summaryMovie').textContent = sessao.filme;
    document.getElementById('summaryTime').textContent = sessao.horario;
}

const pedidoSalvo = Armazenamento.lerPedido();

if (pedidoSalvo) {
    for (const id of pedidoSalvo.assentos) {
        const poltrona = Array.from(mapa.querySelectorAll('.seat')).find((assento) => assento.dataset.id === id);

        if (poltrona && !poltrona.disabled) {
            selecionados.push(id);
            poltrona.classList.add('chosen');
        }
    }

    atualizarResumo();
}

// Seleção e desseleção das poltronas
mapa.addEventListener('click', (event) => {
    const poltrona = event.target.closest('.seat');

    if (!poltrona || poltrona.disabled) {
        return;
    }

    const id = poltrona.dataset.id;

    alternarAssento(id);
    poltrona.classList.toggle('chosen');

    atualizarResumo();

    const aviso = document.getElementById('avisoAssentos');
    if (!atualizarPedidoSalvo()) {
        aviso.textContent = 'Não foi possível salvar sua seleção neste navegador.';
        aviso.hidden = false;
    } else {
        aviso.hidden = true;
    }
});

// Mostrar ou esconder números
const btnNumeros = document.getElementById('btnNumeros');

btnNumeros.addEventListener('click', () => {
    const escondido = mapa.classList.toggle('sem-numeros');

    btnNumeros.setAttribute('aria-checked', !escondido);
});

// Validação antes de continuar
const btnContinuar = document.getElementById('btnContinuar');

btnContinuar.addEventListener('click', (event) => {
    const aviso = document.getElementById('avisoAssentos');

    if (selecionados.length === 0) {
        event.preventDefault();

        aviso.textContent = 'Selecione pelo menos uma poltrona para continuar.';
        aviso.hidden = false;

        return;
    }

    const salvou = atualizarPedidoSalvo();

    if (!salvou) {
        event.preventDefault();

        aviso.textContent = 'Não foi possível salvar sua seleção. Tente novamente.';
        aviso.hidden = false;

        return;
    }

    aviso.hidden = true;
});
