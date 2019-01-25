"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const start_1 = require("./start");
const argvs = require("yargs");
const argv = argvs.demandOption('num').argv;
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
const num = argv.num;
console.log(`Fatoral do numero passado por parametro é ${start_1.fatorial(num)}`);
//Todos os argumentos ultilizados
// console.log(`${process.argv}`)
//# sourceMappingURL=main.js.map