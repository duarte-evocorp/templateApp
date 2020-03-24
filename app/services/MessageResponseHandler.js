const genericType = {
    'LOADING': '',
    'SUCCESS': '',
    'ERROR': 'Essa operação não pode ser realizada.'
};

const byGenericType = (objeto, tipo) => {
    let resultado = 'Servidor indisponível';

    Object.keys(objeto).forEach(chave => {
        if (tipo.search(chave) !== -1) {
            resultado = objeto[chave];
        }
    });

    return resultado;
};

class MessageResponseHandler {
    static Response({ type, response = null, customMessage = null }) {
        // Caso exista uma mensagem customizada, ela será exibida como prioridade;
        const mensage = response && response.data && response.data.errors ? response.data.errors[0].message : 'Algo deu errado, porfavor tente mais tarde.'

        if (customMessage || mensage) return customMessage || mensage;

        switch (type) {
            default: byGenericType(genericType, type);
        }
    }
}

export default MessageResponseHandler;