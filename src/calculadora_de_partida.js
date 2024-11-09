function tabelaRank(saldo){
    let resultado = 0;

    if(saldo <= 10)
        resultado = 'Ferro';
    else if(saldo <= 20)
        resultado = 'Bronze';
    else if(saldo <= 50)
        resultado = 'Prata';
    else if(saldo <= 80)
        resultado = 'Ouro';
    else if(saldo <= 90)
        resultado = 'Diamante';
    else if(saldo <= 100)
        resultado = 'Lendário';
    else
        resultado = 'Imortal';

    return resultado;
}

function main(){
    //Declaração de uma constante para realizar a entrada e saida de dados
    const readline = require('readline');

    //Configuração da interface de entrada e saida de dados
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    //Função para capturar o nome e a experiencia do herói
    rl.question('Informe a quantidade de vitórias: ', (vitorias) => {
        rl.question('Informe a quantidade de derrotas:: ', (derrotas) =>{
            let saldoVitorias = parseInt(vitorias) - parseInt(derrotas);
            let nivel = tabelaRank(saldoVitorias);
            console.log(`O Herói tem de saldo de **{${saldoVitorias}}** está no nível de **{${nivel}}**`);
            rl.close();
        });
    });

}

main();
