const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors()); 

// Spajanje na MongoDB bazu
mongoose.connect('mongodb://localhost:27017/app_knjige').then(() => {
  console.log('Uspješno povezan s bazom podataka');
}).catch((err) => {
  console.error('Greška prilikom povezivanja s bazom podataka', err);
});

// Definiranje modela Knjiga
const Knjiga = mongoose.model('Knjiga', new mongoose.Schema({
  title: String,
  author: String
}, { collection: 'knjige' }));

// GET ruta za dohvaćanje svih knjiga
app.get('/knjige', async (req, res) => {
  try {
    const knjige = await Knjiga.find();
    res.json(knjige);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST ruta za dodavanje nove knjige
app.post('/knjige', async (req, res) => {
  try {
    const { title, author } = req.body;
    const novaKnjiga = new Knjiga({ title, author });
    const spremljenaKnjiga = await novaKnjiga.save();
    res.status(201).json(spremljenaKnjiga);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT ruta za ažuriranje knjige
app.put('/knjige/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author } = req.body;
    const ažuriranaKnjiga = await Knjiga.findByIdAndUpdate(id, { title, author }, { new: true });
    res.json(ažuriranaKnjiga);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE ruta za brisanje knjige
app.delete('/knjige/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Knjiga.findByIdAndDelete(id);
    res.sendStatus(204);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server sluša na portu ${port}`);
});