const carros = require('../bancodedados')   //importação do banco de dados


const listagemCarros = (req, res) => {   //função controlador
    const { marca, cor } = req.query  //parametros que podem ser passados na URL
    let resultado = carros
    if (marca) {   //filtrar carros pela marca e pela marca.
        resultado = resultado.filter((carro) => {
            return carro.marca === marca
        })
    }
    if (cor) {    //filtrar carros pela marca e pela cor.
        resultado = resultado.filter((carro) => {
            return carro.cor === cor
        })
    }
    res.send(resultado)
}

const obterCarro = (req, res) => {    //função controlador
    const { id } = req.params   // parametro usado na URL
    const carroEncontrado = carros.find((carro) => {
        return carro.id === Number(id)
    })
    res.send(carroEncontrado)
}

module.exports = {   // exportação do controlador
    listagemCarros,
    obterCarro
}