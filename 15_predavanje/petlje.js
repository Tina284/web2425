//NIZ
let niz = [2, 5, 2, 7, 4];
console.log(niz);
console.log(niz[0]);
console.log(niz[3]);

mixNiz = [1, 2, "niz", 3, "četiri"];
console.log(mixNiz);
console.log(mixNiz.join("; "));
console.log(niz.length);

//FOR PETLJA
//Ispis brojeva 1-5
for (let i = 1; i <= 5; i++) {
    console.log(i);
};

for (let i = 5; i>=1; i--){
    console.log(i);
};

//parni 1-10
for (let i = 1; i <=10; i++) {
    if (i % 2 == 0){
        console.log(i);
    }
};

//Ispis stringa
let niz2 = ['prvi', 'drugi', 'treći']; // len = 3
for (let i = 0; i < niz2.length; i++){
    console.log(niz2[i]);
};

//zbroj od 1 do 5
let sum = 0;
for (let i = 1; i <= 5; i++){
    sum += i;
};
console.log(sum);

//Ispis 1-50; djeljivi s 3 --> ***
for (let i = 1; i < 51; i++){
    if (i % 3 == 0){
        console.log('***');
    }
    else {
        console.log(i);
    }
};

//WHILE
//ispis brojeva 1-5
let br = 1;
while (br <= 5) {
    console.log(br);
    br++;
}

//Zbrajanje do 20
let suma = 0;
let broj = 1;
while (suma <= 20) {
    suma += broj;
    broj++;
}
console.log(suma);

//prebrojavanje znakova u stringu
let rijec = "BANANA";
let uk = 0;
let z = 0;
while (z < rijec.length) {
    if (rijec[z] == 'N'){
        uk++;
    }
    z++;
};
console.log(uk);

//DO-WHILE
//Ispis 1-5
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);

let p = 4;

while (p < 4) {
    console.log("WHILE");
}

do {
    console.log("Do");
    p++;
} while (p < 4);
console.log(p);