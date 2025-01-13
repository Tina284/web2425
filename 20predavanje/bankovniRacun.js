// 1. Apstraktna klasa
class BankovniRacun {
    constructor(brojRacuna, stanje) {
        if (this.constructor === BankovniRacun) {
            throw new Error('BankovniRacun je apstraktna klasa i ne može se instancirati.');
        }
        this.brojRacuna = brojRacuna;
        this.stanje = stanje;
    }

    uplati(iznos) {
        if (iznos <= this.stanje) {
            console.log('Iznos mora biti veći od 0.');
            return;
        }
        this.stanje += iznos;
        console.log(`Uplaćeno ${iznos}. Novo stanje: ${this.stanje}.`);
    }

    podigni(iznos) {
        throw new Error('Metoda podigni mora biti implementirana u podklasi.');
    }

    obracunKamate() {
        throw new Error('Metoda obracunKamate mora biti implementirana u podklasi.');
    }
}

// 2. Podklasa TekućiRacun
class TekuciRacun extends BankovniRacun {
    constructor(brojRacuna, stanje, dozvoljeniMinus) {
        super(brojRacuna, stanje);
        this.dozvoljeniMinus = dozvoljeniMinus;
    }

    podigni(iznos) {
        if (this.stanje - iznos >= -this.dozvoljeniMinus) {
            this.stanje -= iznos;
            console.log(`Podignuto ${iznos}. Novo stanje: ${this.stanje}.`);
        } else {
            console.log(`Podizanje nije moguće. Prekoračili biste dozvoljeni minus (${this.dozvoljeniMinus}).`);
        }
    }

    obracunKamate() {
        console.log('Tekući računi nemaju kamatu.');
    }
}


// 4. Testiranje
const tekuci = new TekuciRacun('HR12345678', 500, 1000);
tekuci.uplati(200);
tekuci.podigni(1000); 
tekuci.podigni(100);  
tekuci.obracunKamate(); 


