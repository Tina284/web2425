//N
let N = 1111111; //zadan N
let brojClanova = 1; //br. članova niza
let posljednjiClan = N; //posljednji clan u nizu

while (posljednjiClan > 9) {
    let noviClan = 1; 
    let temp = posljednjiClan; //kopija posljednjeg clana

    while (temp > 0) {
        let znamenka = temp % 10; //7 //2 //7
        noviClan *= znamenka; //1*7=7 //7*2=14 //14*7=98
        temp = (temp - znamenka) / 10; //temp = 72 //temp = 7 //0
    }

    posljednjiClan = noviClan; //posljednjiClan = 98
    brojClanova++; //2
}

console.log(posljednjiClan);
console.log(brojClanova);