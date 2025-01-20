// 1. Napravite funkciju pretvorbaSati(sati, jedinica) koja prima broj sati i željenu jedinicu (minute ili sekunde) te vraća pretvorenu vrijednost.

function pretvorbaSati(sati, jedinica) {
    if (jedinica === "minute") {
        return sati * 60;
    } else if (jedinica === "sekunde") {
        return sati * 3600;
    } else {
        return "Nepoznata jedinica. Koristite 'minute' ili 'sekunde'.";
    }
}

// 2. Napravite funkciju brZnak(tekst, znak) koja prima tekst i željeni znak te vraća koliko se puta zadani znak pojavljuje u tekstu.

function brZnak(tekst, znak) {
    let brojac = 0;
    for (let i = 0; i < tekst.length; i++) {
        if (tekst[i] === znak) {
            brojac++;
        }
    }
    return brojac;
}

// 3. Napravite funkciju ukupnaCijena(cijena, količina, porez) koja računa ukupnu cijenu proizvoda nakon dodavanja poreza. Funkcija prima cijenu po jedinici, količinu proizvoda i postotak poreza.
function ukupnaCijena(cijena, količina, porez) {
    const osnovnaCijena = cijena * količina;
    const ukupnaCijena = osnovnaCijena + (osnovnaCijena * (porez / 100));
    return ukupnaCijena;
}

// Primjeri poziva funkcija:
// 1. Pretvorba sati
console.log(pretvorbaSati(2, "minute")); // 120
console.log(pretvorbaSati(2, "sekunde")); // 7200

// 2. Brojanje znakova
console.log(brZnak("hello world", "o")); // 2

// 3. Ukupna cijena
console.log(ukupnaCijena(100, 2, 25)); // 250
