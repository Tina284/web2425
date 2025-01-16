function izmjena(event) {

    event.preventDefault();
    
    let ime = document.getElementById("ime").value;
    let prezime = document.getElementById("prezime").value;
    let spol = document.getElementById("spol").value;
    let email = document.getElementById("email").value;

    if (ime && prezime && spol && email) {
        document.getElementById("naslov").innerText = ime + " " + prezime;
    }
    if (spol === 'Ž') {
        document.body.style.backgroundColor = "pink";
    } else {
        document.body.style.backgroundColor = "blue";
    }
}