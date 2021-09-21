function calculaFaturamentos() {
    const dataJson = arquivoJson();
    const valorResultado = [];

    valorResultado.push(menorFaturamento(dataJson));

    valorResultado.push(maiorFaturamento(dataJson));

    valorResultado.push(mediaFaturamento(dataJson));

    return valorResultado;
}



function menorFaturamento(objetoJson) {
    var valorAtual = {
        dia: "",
        valor: 0
    };

    const valorMinimo = objetoJson.forEach(valor => {
        if (valor.valor != 0) {
            if (valorAtual.valor === 0) {
                valorAtual.valor = valor.valor;
                valorAtual.dia = valor.dia;
            } else if (valorAtual.valor > valor.valor) {
                valorAtual.valor = valor.valor;
                valorAtual.dia = valor.dia;
            }
        }
    })

    return valorAtual;
}

function maiorFaturamento(objetoJson) {
    var valorAtual = {
        dia: "",
        valor: 0
    };

    const valorMaximo = objetoJson.forEach(valor => {
        if (valor.valor != 0) {
            if (valorAtual.valor === 0) {
                valorAtual.valor = valor.valor;
                valorAtual.dia = valor.dia;
            } else if (valorAtual.valor < valor.valor) {
                valorAtual.valor = valor.valor;
                valorAtual.dia = valor.dia;
            }
        }
    })

    return valorAtual;
}

function mediaFaturamento(objetoJson) {
    var valorAtual = {
        contagemDia: 0,
        media: 0
    }
    var contagemMedia = 0;
    var media = 0;

    objetoJson.forEach(valor => {
        if (valor.valor != 0) {
            contagemMedia++;
            media = media + valor.valor;
        }
    })

    valorAtual.media = media / contagemMedia;

    objetoJson.forEach(valor => {
        if (valor.valor != 0) {
            if (valorAtual.media < valor.valor) valorAtual.contagemDia++;
        }
    })

    return valorAtual;
}

function lerArquivoJson() {
    var path = require('path');
    var fs = require('fs');

    var dataExterna;

    fs.readFile(path.resolve(__dirname, 'dados.json'), "utf-8", function (err, data) {
        if (err) {
            return console.log("Erro:\n" + err);
        }

        JSON.parse(data)

        dataExterna = "Texto";
    })

    console.log(
        dataExterna
    )
}

function arquivoJson() {
    const objetoJson = [{
            "dia": 1,
            "valor": 22174.1664
        },
        {
            "dia": 2,
            "valor": 24537.6698
        },
        {
            "dia": 3,
            "valor": 26139.6134
        },
        {
            "dia": 4,
            "valor": 0.0
        },
        {
            "dia": 5,
            "valor": 0.0
        },
        {
            "dia": 6,
            "valor": 26742.6612
        },
        {
            "dia": 7,
            "valor": 0.0
        },
        {
            "dia": 8,
            "valor": 42889.2258
        },
        {
            "dia": 9,
            "valor": 46251.174
        },
        {
            "dia": 10,
            "valor": 11191.4722
        },
        {
            "dia": 11,
            "valor": 0.0
        },
        {
            "dia": 12,
            "valor": 0.0
        },
        {
            "dia": 13,
            "valor": 3847.4823
        },
        {
            "dia": 14,
            "valor": 373.7838
        },
        {
            "dia": 15,
            "valor": 2659.7563
        },
        {
            "dia": 16,
            "valor": 48924.2448
        },
        {
            "dia": 17,
            "valor": 18419.2614
        },
        {
            "dia": 18,
            "valor": 0.0
        },
        {
            "dia": 19,
            "valor": 0.0
        },
        {
            "dia": 20,
            "valor": 35240.1826
        },
        {
            "dia": 21,
            "valor": 43829.1667
        },
        {
            "dia": 22,
            "valor": 18235.6852
        },
        {
            "dia": 23,
            "valor": 4355.0662
        },
        {
            "dia": 24,
            "valor": 13327.1025
        },
        {
            "dia": 25,
            "valor": 0.0
        },
        {
            "dia": 26,
            "valor": 0.0
        },
        {
            "dia": 27,
            "valor": 25681.8318
        },
        {
            "dia": 28,
            "valor": 1718.1221
        },
        {
            "dia": 29,
            "valor": 13220.495
        },
        {
            "dia": 30,
            "valor": 8414.61
        }
    ]

    return objetoJson
}

textoMenorFaturamento = ` - O dia ${calculaFaturamentos()[0].dia} teve o menor faturamento com : ${calculaFaturamentos()[0].valor}`;

textoMaiorFaturamento = ` - O dia ${calculaFaturamentos()[1].dia} teve o maior faturamento com : ${calculaFaturamentos()[1].valor}`;

textoMediaFaturamento = ` - A média do faturamento é  ${calculaFaturamentos()[2].media}, cotendo ${calculaFaturamentos()[2].contagemDia} dias que superam a média mensal`

console.log(
    textoMenorFaturamento + ";\n" +
    textoMaiorFaturamento + ";\n" +
    textoMediaFaturamento + ";"
);