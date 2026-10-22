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
            return;
        } catch (erro) {
            return;
        }
    },
    ler: (chave,padrao) => {
        try {
            const valor = localStorage.getItem(chave);
            if (valor === null) {
                return padrao;
            }
            return JSON.parse(valor);
        } catch (erro) {
            return padrao;
        }
    }
};