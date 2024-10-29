const express = require('express');
const app = express();
const cors = require('cors');

const port = 8080;

const Cards = require('./cards');

app.use(express.json());

app.use(cors());

app.get('/', async (req, res) => {
    try {
        res.send("Welcome");
    }
    catch (error) {
        res.status(500).send({ message: "Internal Server Error" })
    }
});

app.get('/api/cards', async (req, res) => {
    try {
        res.send(Cards);
    }
    catch (error) {
        res.status(500).send({ message: "Internal Server Error" })
    }
});

app.get('/api/cards/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const card = Cards.find(card => card.id === id);
        if (!card) {
            res.status(404).send({ message: "Card not found" })
        }
        else {
            res.send(card);
        }
    }
    catch (error) {
        res.status(500).send({ message: "Internal Server Error" })
    }
});

app.post('/api/cards', async (req, res) => {
    const newCard = {
        id: Cards.length,
        text: 'New Card',
        color: 'red',
        ...req.body
    }
    try {
        Cards.push(newCard);
        res.status(201).send(newCard);
    }
    catch (error) {
        res.status(400).send({ message: "Invalid card data" })
    }
});

app.put('/api/cards/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const updatedCard = req.body;
    try {
        const card = Cards.find(card => card.id === id);
        if (!card) {
            res.status(404).send({ message: "Card not found" })
        }
        else {
            Object.assign(card, updatedCard);
            res.send(card);
        }
    }
    catch (error) {
        res.status(500).send({ message: "Internal Server Error" })
    }
});

app.patch('/api/cards/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const updatedCard = req.body;
    try {
        const card = Cards.find(card => card.id === id);
        if (!card) {
            res.status(404).send({ message: "Card not found" })
        }
        else {
            Object.assign(card, updatedCard);
            res.send(card);
        }
    }
    catch (error) {
        res.status(500).send({ message: "Internal Server Error" })
    }
});

app.delete('/api/cards/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const card = Cards.find(card => card.id === id);
        if (!card) {
            res.status(404).send({ message: "Card not found" })
        }
        else {
            Cards.splice(id, 1);
            res.send(card);
        }
    }
    catch (error) {
        res.status(500).send({ message: "Internal Server Error" })
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})