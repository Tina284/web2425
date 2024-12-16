function zbroj(a, b) {
    let c = a + b;
    //console.log("Funkcija: ", c);
    return c;
};

//streličasta funkcija (arrow)
const zbrojArr = () => {
    let c = 5 + 4;
    console.log("Funkcija: ", c);
    return c;
};


let suma = zbrojArr();

console.log(suma);
let x = 5;
let y = 4;
let sum = zbroj(x, y);
console.log(sum);

function umnozak(x, y = 2) {
    return x*y;
}
console.log(umnozak(4, 6));

function zbrojM(...args) {
    let sum = 0;
    for (let arg of args) {
        sum += arg;
    }
    return sum;
}
let niz = zbrojM(5, 432, 65, 34, 1);
console.log(niz);
