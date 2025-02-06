const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
app.use(bodyParser.json());
const port = 3000;

//Spajanje na MongoDB bazu
mongoose.connect('mongodb://localhost:27017/appKnjige').then(
    () => {
        console.log("Povezan s bazom");
    }).catch((err) => {
        console.error("Greška pri povezivanju na bazu", err)
    });

//model knjige
const Knjiga = mongoose.model('Knjiga', new mongoose.Schema({
    title: String,
    author: String
}, { collection:'knjige' }));

//GET zahtjev
app.get('/knjige', async(req, res) => {
    try {
        const knjige = await Knjiga.find();
        res.json(knjige);
    } catch (err) {
        res.status(500).json({error: err.message });
    }
});

//POST zahtjev
app.post('/knjige', async(req, res) => {
    try {
        const { title, author} = req.body;
        const novaKnjiga = new Knjiga({title, author});
        const spremljenaKnjiga = await novaKnjiga.save();
        res.status(201).json(spremljenaKnjiga);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

//PUT zahtjev
app.put('/knjige/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const { title, author } = req.body;
        const azuriranaKnjiga = await Knjiga.findByIdAndUpdate(id, { title, author}, {new: true});
        res.json(azuriranaKnjiga);
    } catch (err) {
        res.status(400).json({ error: err.message});
    }
});

//DELETE zahtjev
app.delete('/knjige/:id', async(req, res) => {
    try {
        const {id} = req.params;
        await Knjiga.findByIdAndDelete(id);
        res.status(204);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
});


app.listen(port, () => {
    console.log("Aplikacija je pokrenuta")
})