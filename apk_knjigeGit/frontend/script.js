document.addEventListener('DOMContentLoaded', async () => {
    const knjigeDiv = document.getElementById('knjige');
    const forma = document.getElementById('forma');
    await prikaziKnjige();
    // Funkcija za prikaz svih knjiga
    async function prikaziKnjige() {
      knjigeDiv.innerHTML = '';
  
      const response = await fetch('http://localhost:3000/knjige');
      const knjige = await response.json();
  
      knjige.forEach(knjiga => {
        const knjigaDiv = document.createElement('div');
        knjigaDiv.classList.add('knjiga');
        knjigaDiv.innerHTML = `
          <strong>${knjiga.title}</strong> - ${knjiga.author}
          <button onclick="azurirajKnjigu('${knjiga._id}')">Ažuriraj</button>
          <button onclick="obrisiKnjigu('${knjiga._id}')">Obriši</button>
        `;
        knjigeDiv.appendChild(knjigaDiv);
      });
    }
  
    // Funkcija za dodavanje nove knjige
    forma.addEventListener('submit', async (e) => {
      e.preventDefault();
      const naslov = document.getElementById('title').value;
      const autor = document.getElementById('author').value;
  
      const response = await fetch('http://localhost:3000/knjige', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: naslov, author: autor })
      });
  
      if (response.ok) {
        prikaziKnjige();
        forma.reset();
      }
    });
  
    // Funkcija za ažuriranje knjige
    window.azurirajKnjigu = async (id) => {
      const noviNaslov = prompt('Unesite novi naslov:');
      const noviAutor = prompt('Unesite novog autora:');
  
      const response = await fetch(`http://localhost:3000/knjige/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: noviNaslov, author: noviAutor })
      });
  
      if (response.ok) {
        prikaziKnjige();
      }
    };
  
    // Funkcija za brisanje knjige
    window.obrisiKnjigu = async (id) => {
      const potvrda = confirm('Jeste li sigurni da želite obrisati knjigu?');
      if (potvrda) {
        const response = await fetch(`http://localhost:3000/knjige/${id}`, { method: 'DELETE' });
        if (response.ok) {
          prikaziKnjige();
        }
      }
    };
  
    // Inicijalno prikazivanje knjiga
    prikaziKnjige();
  });
  