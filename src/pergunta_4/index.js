function pergunta_4() {
    var textoResposta = `
    - O valor total mensal da distribuidora é de : ${calcularPorcentagem()[0].somaTotal}\n
    - A porcentagem para os estados são de:\n`;

    var textoRepostaEstado = "";

    for (var i = 1; i < calcularPorcentagem().length; i++) {
        textoRepostaEstado = textoRepostaEstado + `
        -${calcularPorcentagem()[i].estado} com porcetagem de ${calcularPorcentagem()[i].porcentagem}% 
    `
    }

    console.log(textoResposta + textoRepostaEstado)
}

function calcularPorcentagem() {
    var valoresPorcentual = [{
        somaTotal: mediaFaturamento(arquivoFaturamento())
    }]

    arquivoFaturamento().forEach(valor => {
        var porcentagem = (valor.faturamento * 100) / valoresPorcentual[0].somaTotal;

        valoresPorcentual.push({
            estado: valor.estado,
            porcentagem: Math.round(porcentagem)
        })
    })

    return valoresPorcentual;
}

function mediaFaturamento(arquivoJson) {
    var soma = 0;

    arquivoJson.forEach(valor => {
        soma = soma + valor.faturamento;
    });

    return soma;
}

function arquivoFaturamento() {
    var arquivo = [{
            estado: "SP",
            faturamento: 67836.43
        },
        {
            estado: "RJ",
            faturamento: 36678.66
        },
        {
            estado: "MG",
            faturamento: 29229.88
        },
        {
            estado: "ES",
            faturamento: 27165.48
        },
        {
            estado: "Outros Estados",
            faturamento: 19849.53
        }
    ]

    return arquivo
}

module.exports = pergunta_4();