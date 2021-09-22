function pergunta2() {

    realizarPergunta()

}

function realizarPergunta() {
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('\n\nEscolha um numero para iniciar a sequência de Finobacci: ', (resposta) => {

        if (resposta >= 0) {
            rl.close();
            console.log(sequenciaFibonacci(resposta));
        }

    });
}

function sequenciaFibonacci(valorDesejado) {
    let valorAnterior = 0;
    let valorPosterior = 1;
    let valorTransicao = 1;
    let resultado = false;

    while (valorDesejado >= valorPosterior) {
        valorTransicao = valorPosterior;
        valorPosterior = valorAnterior + valorPosterior;

        valorAnterior = valorTransicao;

        if (valorDesejado == valorPosterior) resultado = true;
    }

    if (resultado == true) return `O valor ${valorDesejado} está presente na sequência\n\n`;
    else return `O valor ${valorDesejado} não está presente na sequência\n\n`;
}

module.exports = pergunta2();