// Učitavanje lodash biblioteke putem oznake skripte
const script = document.createElement('script');
script.src = 'https://unpkg.com/lodash@4.17.21/lodash.min.js';
script.onload = function() {
  // Nakon što se lodash biblioteka učita, možemo koristiti njene funkcije
  // Definiranje niza objekata
  const osobe = [
    { ime: 'Ana', prezime: 'Anić', godine: 30 },
    { ime: 'Ivan', prezime: 'Ivić', godine: 25 },
    { ime: 'Petra', prezime: 'Perić', godine: 35 }
  ];

  // Korištenje lodash funkcije za filtriranje osoba starijih od 30 godina
  const starijeOsobe = _.filter(osobe, (osoba) => osoba.godine > 30);
  console.log('Starije osobe:', starijeOsobe);

  // Korištenje lodash funkcije za sortiranje osoba po imenu
  const sortiraneOsobe = _.sortBy(osobe, 'ime');
  console.log('Sortirane osobe:', sortiraneOsobe);

  // Korištenje lodash funkcije za mapiranje imena osoba u niz
  const imena = _.map(osobe, 'ime');
  console.log('Imena osoba:', imena);

  // Korištenje lodash funkcije za grupiranje osoba prema godinama
  const grupiraneOsobe = _.groupBy(osobe, 'godine');
  console.log('Grupirane osobe:', grupiraneOsobe);
};
document.head.appendChild(script);

