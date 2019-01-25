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
const fatorial = (num) => {
    if(num === 0){
        return 1;
    }
    return num * fatorial(num - 1);
};

console.log(`Fatoral do numero passado por parametro é ${fatorial(process.argv[2])}`)


//Todos os argumentos ultilizados
// console.log(`${process.argv}`)
