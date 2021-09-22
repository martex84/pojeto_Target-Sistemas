function pergunta_5() {
    const readline = require('readline');

    const palavra = "";

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('\n\nEscolha uma palavra para a inverter : ', (valor) => {
        rl.close();

        const valorArray = Object.assign(invertArray(valor));

        let textoFinal =
            `  - Palavra original : ${valorArray.palavra}\n` +
            `  - Palavra invertida: ${valorArray.palavraInvertida}\n`;

        console.log(textoFinal)

    })
}

function invertArray(stringValor) {
    const arrayString = [...convertStringArray(stringValor)]
    const tamanhoArrayString = arrayString.length - 1;
    let stringFinal = {
        palavra: stringValor,
        palavraInvertida: ""
    }

    for (let i = tamanhoArrayString; i >= 0; i--) {
        stringFinal.palavraInvertida = stringFinal.palavraInvertida + arrayString[i];
    }

    return stringFinal;
}

function convertStringArray(stringValor) {
    let temporario = stringValor;
    let tamanhoString = temporario.length;
    let stringArray = [];

    for (let i = 0; i < tamanhoString; i++) {
        if (i === tamanhoString - 1) {
            stringArray.push(temporario.substring(i))
        } else {
            stringArray.push(temporario.substring(i, i + 1))
        }
    }

    return stringArray;
}

module.exports = pergunta_5();