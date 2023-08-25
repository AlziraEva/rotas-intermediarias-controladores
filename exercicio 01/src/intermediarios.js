const validarSenha = (req, res, next) => {
    const { senha } = req.query

    if (!senha) {
        return res.send('senha não informada')
    }
    if (senha !== "carros123") {
        return res.send('senha incorreta')
    }
    next()
}

module.exports = {
    validarSenha
}