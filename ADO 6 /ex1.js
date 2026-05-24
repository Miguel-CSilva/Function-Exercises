import prompt from 'prompt-sync';
let ler  = prompt();

console.log('\nPROGRAMA DA CONTAGEM\n');

// ENTRADA
console.log('Insira um número');
let num = Number(ler());

// PROCESSAMENTO
cont(num)

// SAÍDA

// ÁREA DAS FUNÇÕES
function cont(n){
    for(let x = 1; x <= n; x++){
        console.log(x)
    }
}
