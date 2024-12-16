/*let niz = [10, 23, 35, 56, 78];
let testni = 35;

if (testni === niz[2]) {
    console.log("Isti su.")
}
else {
    console.log("Nisu isti.")
}*/

// Zadatak 2. TROKUT
/*let a = 5;
let b = 6;
let c = 8;
if (a+b > c && a+c > b && b+c > a){
    console.log("Trokut je.")
    if (a === b && a === c && b === c){
        console.log("Jednakostraničan.")
    } else if (a === b || a === c || b === c){
        console.log("Jednakokračan.")
    } else {
        console.log("Raznostraničan.")
    }
}
else {
    console.log("Nije trokut.")
}*/

//ZADATAK 3. ZVJEZDICE
for (let i = 5; i > 0; i--){
    let red = ''
    for (let j = 0; j < i; j++){
        red +='*'
    }
    console.log(red)
}


