//JEDNAKOST
let a = "10";
let b = 10;
console.log("Dvije jednakosti: ", a == b);
console.log("Tri jednakosti: ", a === b);
console.log("Jedna jednakost: ", a = b);
console.log(typeof(a));
console.log(typeof(b));

//IF
if (a > 15) {
    console.log("a je veće od 8.")
};
console.log("nastavak zadatka.");

//IF - ELSE
let godine= 18;
if (godine < 18) {
    console.log("Maloljetna osoba.")
} else {
    console.log("Punoljetna osoba.")
};
console.log("Nastavak 2");

//NESTED IF
let x = 12;
let y = 8;
if (x > 10) {
    if (y > 6) {
        console.log("x je veći od 10 i y je veći od 6.")
    } else {
        console.log("x je veći od 10 a y je manji ili jednak 6.")
    }
} else { 
    if (y > 6) {
        console.log("x <= 10 i y > 6")
    } else {
        console.log("x <= 10 i y <= 6 ")
    }

};

if ((x>10) && (y>6)) {
    console.log("x je veći od 10 i y je veći od 6.")
};

//IF - ELSE IF - ELSE
let dob = 300;
if (dob < 18) {
    console.log("Maloljetna osoba.")
} else if (dob < 66) {
    console.log("Odrasla osoba.")
} else if (dob < 101) {
    console.log("Umirovljenik.")
} else {
    console.log("Neispravan unos.")
};
console.log("Nastavak 3");