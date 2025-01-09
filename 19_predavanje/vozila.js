//apstraktna klasa
class Vozilo {
    constructor(proizvodac, model){
        if (this.constructor === Vozilo){
            throw new Error('Apstraktna klasa se ne može instancirati');
        }
        this.proizvodac = proizvodac;
        this.model = model;
    }
    //apstraktna metoda
    vozi() {
        throw new Error("Metoda nije implementirana")
    }
}

//Nasljeđivanje
class Auto extends Vozilo {
    #razinaGoriva; //enkapsulacija - skriveno svojstvo

    constructor(proizvodac, model, razinaGoriva){
        super(proizvodac, model); //šalje roditelju - klasi Vozilo
        this.#razinaGoriva = razinaGoriva
    }

    vozi() {
        if (this.#razinaGoriva > 0) {
            console.log("Automobil vozi");
            this.#razinaGoriva--;
        } else {
            console.log("Nema goriva za vožnju.")
        }
    }

    natociGorivo(vrijednost){
        this.#razinaGoriva += vrijednost;
        console.log(`Automobil sada ima ${this.#razinaGoriva} goriva.`)
    }
}

let autoA = new Auto('Toyota', 'Corolla', 5);
autoA.vozi();
autoA.natociGorivo(5);
console.log(autoA.model);
//console.log(autoA.#razinaGoriva); - ne možemo pristupiti privatnim svojstvima van klase

//Nasljedivost
class Kamion extends Vozilo {
    #nosivost //enkapsulacija - privatno svojstvo
    constructor(proizvodac, model, nosivost){
        super(proizvodac, model);
        this.#nosivost = nosivost;
    }
    vozi() {
        console.log(`${this.proizvodac} ${this.model} prevozi teret.`)
    }

    utovariTeret(tezina) {
        if (tezina <= this.#nosivost) {
            console.log("Teret se može utovariti.")
        } else {
            console.log("Težina je veća od nosivosti kamiona.")
        }
    }
}

let kamion = new Kamion("Volvo", "FH16", 20);
kamion.vozi();
kamion.utovariTeret(10);
kamion.utovariTeret(40);

class Bicikl extends Vozilo {
    vozi() {
        console.log("Pedaliranje.")
    }
}

let bika = new Bicikl("Giant", "Escape 3");
bika.vozi()