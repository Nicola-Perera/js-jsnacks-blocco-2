const bici1 = {
    nome: 'primo',
    peso: 30
}

const bici2 = {
    nome: 'secondo',
    peso: 21
}
const bici3 = {
    nome: 'terzo',
    peso: 43
}
const bici4 = {
    nome: 'quarto',
    peso: 32
}

const bicycles = [bici1, bici2, bici3, bici4];
const weightsList = [];
for (let i = 0; i < bicycles.length; i++) {
    const biciWeight = bicycles[i].peso
   weightsList.push(biciWeight);
}
console.log(weightsList);

const biciPiuPesante = piuPesante(weightsList);
console.log(biciPiuPesante);

// let heavyBici;
// for (let i = 0; i < weightsList; i++) {
//     if (weightsList[i] > weightsList[i++]) {
//         heavyBici
//     }
// }
 
// if (weightsList[i] > weightsList[i++]) [

// ]

function piuPesante (weightsList) {
    let heavyBici;
    for (let i = 0; i < weightsList.leght -1; i++) {
        if (weightsList[i] > weightsList[i+1]) {
            heavyBici = 1;
           }
           else {
               heavyBici = i+1;
           }
        }
        return heavyBici;
    }