// Definiranje JSON objekta
const osobaJSON = {
     "ime": "Ana",
     "prezime": "Anić",
     "godine": 30,
    "grad": "Zagreb",
     "zaposlen": true,
     "hobiji": ["čitanje", "planinarenje", "ples"]
     };
     
// Pristupanje svojstvima JSON objekta
console.log("Ime:", osobaJSON.ime);
console.log("Prezime:", osobaJSON.prezime);
console.log("Godine:", osobaJSON.godine);
console.log("Grad:", osobaJSON.grad);
console.log("Zaposlen:", osobaJSON.zaposlen);
console.log("Hobiji:", osobaJSON.hobiji.join(", ")); // Pridruživanje niza hobija u jedan string
     
// Dodavanje novog svojstva JSON objektu
osobaJSON.email = "ana@example.com";
console.log("Email:", osobaJSON.email);
 
// Pretvaranje JSON objekta u JSON string
const jsonString = JSON.stringify(osobaJSON);
console.log("JSON string:", jsonString);
     
// Pretvaranje JSON stringa u JSON objekt
const noviObjekt = JSON.parse(jsonString);
console.log("Pretvoreni JSON objekt:", noviObjekt);
    
    