"use strict";
// let giocatore1: number = 1;
// let giocatore2: number = 100;
// let giocatore1;
// let giocatore2;
// let value1;
// let value2;
// function setNum1() {
//   giocatore1 = document.getElementById("gioc1") as HTMLInputElement;
//   value1 = parseInt(giocatore1?.value);
//   console.log(value1);
//   return value1;
// }
// console.log(value1);
// function setNum2() {
//   giocatore2 = document.getElementById("gioc2") as HTMLInputElement;
//   value2 = parseInt(giocatore2?.value);
//   console.log(value2);
//   return value2;
// }
// console.log(value2);
let giocatore1 = document.getElementById("gioc1");
let value1 = parseInt(giocatore1 === null || giocatore1 === void 0 ? void 0 : giocatore1.value);
console.log(value1);
let giocatore2 = document.getElementById("gioc2");
let value2 = parseInt(giocatore2 === null || giocatore2 === void 0 ? void 0 : giocatore2.value);
console.log(value2);
function createRandomNumber() {
    let numberRandom = Math.floor(Math.random() * (100 - 1) + 1);
    return numberRandom;
}
let randomNumber = createRandomNumber();
console.log(randomNumber);
// if (value1 === randomNumber) {
//   console.log("1: Hai VINTO!");
// } else if (value2 === randomNumber) {
//   console.log("2: Hai VINTO!");
// } else if (Math.abs(randomNumber - value1) < 50) {
//   console.log("Il giocatore1 si è avvicinato di più");
// } else {
//   console.log("Il giocatore2 si è avvicinato di più");
//}
let diff1 = Math.abs(randomNumber - value1) - randomNumber;
let diff2 = Math.abs(randomNumber - value2) - randomNumber;
if (value1 === randomNumber) {
    console.log("1: Hai VINTO!");
}
else if (value2 === randomNumber) {
    console.log("2: Hai VINTO!");
}
else if (diff1 < diff2) {
    console.log("Il giocatore1 si è avvicinato di più");
}
else {
    console.log("Il giocatore2 si è avvicinato di più");
}
