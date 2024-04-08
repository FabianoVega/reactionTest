

// function elementoEIndice(arr){
//     for (let numero of arr){
//         console.log(numero)
//         const indice=arr.indexOf(numero)
//         console.log(`O elemento ${numero} esta no indice ${indice}`)
// };
// };
// const lista =[1, 2 , 3 , 4];
// elementoEIndice(lista)


function retornaMaiorEMenor(arr){

    let maior = 0;
    let menor = 0;


    for (let i = 0; i<arr.length; i++){
        if (arr[i]>maior){
            maior=arr[i]
        }
        if (arr[i]<maior){
            menor=+arr[i]   
        
        }
    
    }
    return `o menor valor é ${menor} e o maior é ${maior}`; 
}
const lista =[1, 2 , 3 , 4];
console.log(retornaMaiorEMenor(lista));



    