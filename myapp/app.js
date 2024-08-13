const express = require('express'); // Imports express library
const cors = require('cors');
const app = express(); // Allows to start executing the server
const port = 4567; // Defines the port the server will be listening.

app.use(express.json()); // Allows the server to parse payloads to JSON.
app.use(express.urlencoded({ extended: true }));
app.use(cors());

let db = [{
    id: 0,
    name: "item 0",
    isDone: false
}, {
    id: 1,
    name: "item 1",
    isDone: true
}];
let id = 2;

// The server is now listening to the port.
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Returns all items in db.
app.get('/items', (req, res) => {
    res.send(db);
})

// Adds item to db.
app.post('/post', (req, res) => {
    let body = req.body;

    let newItem = {
        id: id++,
        name: body.name,
        isDone: false
    };

    db.push(newItem);

    console.log("Item to add: ", newItem);
    console.log("db: ", db);
    res.send(db);
});

// Modified items in db.
app.put('/put/:id', (req, res) => {
    let idToModify = parseInt(req.params.id);
    let newInfo = req.body;
    let itemToUpdate = db.find(item => item.id === idToModify);

    console.log("item to update: ", itemToUpdate);
    console.log("New info of item: ", newInfo);
    console.log("db:", db);

    if (itemToUpdate === undefined) {
        console.log("Item not found.");
        res.status(404).send("Item not found.");
        return;
    }

    itemToUpdate.name = newInfo.name;
    itemToUpdate.isDone = newInfo.isDone;
    console.log("Updated db: ", db);

    res.send(db);
});

// Deletes an item from the db.
app.delete('/delete/:id', (req, res) => {
    let idToDelete = parseInt(req.params.id);

    let elementToDelete = db.find(item => item.id === idToDelete);

    if (elementToDelete === undefined) {
        console.log("Item not found.");
        res.status(404).send("Item not found.");
        return;
    }

    db = db.filter(item => item.id !== idToDelete);

    res.send(db);
})
