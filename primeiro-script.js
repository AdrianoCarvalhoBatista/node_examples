console.log("fatorial");

const fatorial = (num) => {
    if(num === 0){
        return 1;
    }
    return num * fatorial(num - 1);
};

console.log(`O fatorial de 5 é igual:  ${fatorial(5)}`);