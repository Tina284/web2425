class Pravokutnik {
    constructor(visina, sirina){
        this.visina = visina;
        this.sirina = sirina;
    }
    getPovrsina() {
        return this.visina * this.sirina
    }
}

let pravokutnikA = new Pravokutnik(10,20);
console.log(pravokutnikA.getPovrsina());