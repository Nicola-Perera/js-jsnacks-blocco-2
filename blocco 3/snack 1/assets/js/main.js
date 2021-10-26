/*
* Crea un array vuoto e chiedi all’utente un numero
* da inserire nell’array. Continua a chiedere i numeri
* all’utente e a inserirli nell’array fino a quando
* la somma degli elementi è minore di 50.
*/ 

const array50 = [];
let sum = 0;
for (let i = 0; i < array50.length; i++) {
    sum += array50[i];
}
while (sum < 50) {
    const userNumber = parseFloat(prompt('inserisci un numero'));
    sum += userNumber;
    array50.push(userNumber);
}
console.log(sum)
