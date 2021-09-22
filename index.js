function iniciarProjeto() {
    console.log("Para Iniciar o processo selecione a pergunta que deseja ver o resultado:" + "\n" +
        "Pergunta 1: Resultado da soma;" + "\n" +
        "Pergunta 2: Sequência de Fibonacci;" + "\n" +
        "Pergunta 3: Faturamento Diário;" + "\n" +
        "Pergunta 4: Porcentual de Representação;" + "\n" +
        "Pergunta 5: Inversão de Caracteres;"
    )

    realizarPergunta();
}

function realizarPergunta() {
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('\n\nDesejo iniciar com a Pergunta ', (valor) => {

        switch (valor) {

            case "1":
                rl.close();
                const primeiraPergunta = require('./src/pergunta_1');
                break;

            case "2":
                rl.close();
                const segundaPergunta = require('./src/pergunta_2')
                break;

            case "3":
                rl.close();
                const terceiraPergunta = require('./src/pergunta_3')
                break;

            case "4":
                rl.close();
                const quartaPergunta = require('./src/pergunta_4')
                break;

            case "5":
                rl.close();
                const quintaPergunta = require('./src/pergunta_5')
                break;

            default:
                rl.close();
                console.log("Valor Escolhido Incorreto!")
                break;

        }

    });



}

iniciarProjeto();