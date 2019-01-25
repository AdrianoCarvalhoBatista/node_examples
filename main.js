const fatorial = require('./fatorial');
const argv = require('yargs').demandOption('num').argv
console.log("Que sistema operacional está sendo executado!");

//Arquitetura
//console.log(`${process.arch}`)

//Diretorio
//console.log(`${process.cwd()}`)k

// //Trabalhando com eventos

// process.on('exit', ()=>{
//     console.log("Final de execucão de script")
// })

//Funcao fatorial pegar numero por parametro Exemplo: node object-process 5

const num = argv.num

console.log(`Fatoral do numero passado por parametro é ${fatorial(num)}`)


//Todos os argumentos ultilizados
// console.log(`${process.argv}`)
