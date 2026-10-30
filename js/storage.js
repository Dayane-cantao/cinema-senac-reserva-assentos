const CHAVE_SESSAO_SELECIONADA = 'cinemaSenac.sessaoSelecionada';

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
    }
};
