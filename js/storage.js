const CHAVE_SESSAO_SELECIONADA = 'cinemaSenac.sessaoSelecionada';
const CHAVE_PEDIDO = 'cinemaSenac.pedido';

const Armazenamento = {
    salvar: (chave, valor) => {
        try {
            localStorage.setItem(chave, JSON.stringify(valor));
            return true;
        } catch (erro) {
            return false;
        }
    },
    remover: (chave) => {
        try {
            localStorage.removeItem(chave);
            return true;
        } catch (erro) {
            return false;
        }
    },
    ler: (chave, padrao) => {
        try {
            const valor = localStorage.getItem(chave);
            if (valor === null) {
                return padrao;
            }
            return JSON.parse(valor);
        } catch (erro) {
            return padrao;
        }
    },
    salvarSessaoSelecionada: (filme, horario) => {
        return Armazenamento.salvar(CHAVE_SESSAO_SELECIONADA, { filme, horario });
    },
    lerSessaoSelecionada: () => {
        const sessao = Armazenamento.ler(CHAVE_SESSAO_SELECIONADA, null);
        if (!sessao || typeof sessao.filme !== 'string' || typeof sessao.horario !== 'string') {
            return null;
        }
        return sessao;
    },
    salvarPedido: (assentos, total) => {
        return Armazenamento.salvar(CHAVE_PEDIDO, { assentos, total });
    },
    removerPedido: () => {
        return Armazenamento.remover(CHAVE_PEDIDO);
    },
    lerPedido: () => {
        const pedido = Armazenamento.ler(CHAVE_PEDIDO, null);

        if (!pedido || !Array.isArray(pedido.assentos) || typeof pedido.total !== 'number') {
            return null;
        }

        return pedido;
    }
};
