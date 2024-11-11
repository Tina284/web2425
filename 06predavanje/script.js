var tezina = 700;
var visina = 165;
var spol = "m";

var bmi = tezina / ((visina/100)**2);

if (spol = "z" && bmi < 19){
    console.log("pothranjena")
}
else if (spol = "z" && bmi < 25) {
    console.log("Idealna")
}
else if (spol = "z" && bmi > 24) {
    console.log("pretila")
}
else if (spol = "m" && bmi < 20) {
    console.log("pothranjen")
}
else if (spol = "m" && bmi < 26) {
    console.log("Idealan")
}
else {
    console.log("pretio")
}




if (spol == "z") {
    if (bmi < 19){
        console.log("Osoba je pothranjena. - z")
    } else if (bmi < 25){
        console.log("Osoba je idealne tjelesne težine. - z")
    } else {
        console.log("Osoba je pretila. - z")
    }
} else {
    if (bmi < 20){
        console.log("Osoba je pothranjena. - m")
    } else if (bmi < 26){
        console.log("Osoba je idealne tjelesne težine. - m")
    } else {
        console.log("Osoba je pretila. - m")
    }
}


