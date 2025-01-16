//Zadatak 1.
class Mjesto {
    constructor(naziv, zupanija, br_stan, postanski_br) {
      this.naziv = naziv;
      this.zupanija = zupanija;
      this.br_stan = br_stan;
      this.postanski_br = postanski_br;
    }
  
    ispisMjesta() {
      console.log(`Naziv mjesta je ${this.naziv}. Mjesto se nalazi u ${this.zupanija} županiji, te ima ${this.br_stan} stanovnika. Poštanski broj je ${this.postanski_br}.`);
    }
  }
  
  // Instanciranje objekata
  const mjesto1 = new Mjesto('Zagreb', 'Grad Zagreb', 800000, '10000');
  const mjesto2 = new Mjesto('Split', 'Splitsko-dalmatinska', 200000, '21000');
  
  // Ispis informacija o mjestima
  mjesto1.ispisMjesta();
  mjesto2.ispisMjesta();


//Zadatak 2.
const artikli = [
    {
      vrsta: 'suhomesnati',
      cijena: 15.99,
      kolicina: '1 kom'
    },
    {
      vrsta: 'mliječni',
      cijena: 2.49,
      kolicina: '500 ml'
    },
    {
      vrsta: 'bio',
      cijena: 7.99,
      kolicina: '2 kg'
    }
  ];
  
  // Ispis informacija o artiklima
  console.log('Informacije o artiklima:');
  artikli.forEach(artikl => {
    console.log(`Vrsta: ${artikl.vrsta}, Cijena: ${artikl.cijena} kn, Količina: ${artikl.kolicina}`);
  });
  
  // Pretvaranje u JSON format
  const jsonArtikli = JSON.stringify(artikli, null, 2);
  
  // Ispis JSON formata
  console.log('\nJSON format:');
  console.log(jsonArtikli);
  

