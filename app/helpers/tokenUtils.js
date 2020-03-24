class TokenUtils {
    static format(token, expires_in) {
        const expiresDate = new Date();
        // O token vai ter 1 hora de validade
        // expiresDate.setHours(expiresDate.getHours() + 1);

        expiresDate.setSeconds(expiresDate.getSeconds() + expires_in - 300);

        return {
            key: `Bearer ${token}`,
            expiresDate,
        };
    }

    /**
    * Verifica se o token ainda é válido
    * @param {Object} token.
    * @returns true or false.
    */
    static isExpired(token) {
        const currentTime = new Date();
        const expiresDate = new Date(token.expiresDate);
        return currentTime > expiresDate;
    };
};

export default TokenUtils;

