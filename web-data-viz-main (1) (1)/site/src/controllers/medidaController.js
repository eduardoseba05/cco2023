var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidas(req, res) {
    var fkCadastro = req.params.fkCadastro;
    medidaModel.buscarUltimasMedidas(fkCadastro).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarMedidasEmTempoReal(req, res) {

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var gols_feitos = req.body.gols_feitosServer;
    var gols_sofridos = req.body.gols_sofridosServer;
    var fkCadastro = req.body.fkCadastroServer;

    // Faça as validações dos valores
    if (gols_feitos == undefined) {
        res.status(400).send("Seu golsf está undefined!");
    } else if (gols_sofridos == undefined) {
        res.status(400).send("Seu golss está undefined!");
    } else if (fkCadastro == undefined) {
        res.status(400).send("Sua fk está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        medidaModel.cadastrar(gols_feitos, gols_sofridos, fkCadastro)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    cadastrar

}