**MONGO DB**

Za ovaj primjer inicijalno je kreirana baza app_knjige s kolekcijom knjige u MongoDB Compass-u.
Zapisi unutar baze su imali dva atributa: title i author.

**BACKEND**

Za korištenje ove datoteke potrebno je napraviti sljedeće korake u Terminalu ( na .../apkKnjigeGit/backend putanji):
   
    1. npm init --> inicijalizacija Node.js 
       
        - sve korake preskočiti osim entry point gdje je potrebno dodati server.js
   
    2. npm install express --> instalacija Express-a
   
    3. npm install mongoose --> instalacija mongoose biblioteke za rad s MongoDb bazama podataka
  
    4. npm install cors --> instalacija cors biblioteke za komunikaciju s frontendom

Backend aplikacije se pokreće iz terminala naredbom: node server
Backend je moguće testirati primjerice pomoću Postman-a


**FRONTEND**

Obratiti pažnju na povezivanje na backend. U ovom primjeru sa predavanja frontend se pokretao pomoću Live Server ekstenzije.



