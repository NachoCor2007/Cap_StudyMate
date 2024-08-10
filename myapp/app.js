const express = require('express'); // Imports express library
const app = express(); // Allows to start executing the server
const port = 3000; // Defines the port the server will be listening.

app.use(express.json()); // Allows the server to parse payloads to JSON.
app.use(express.urlencoded({ extended: true }));

let db = [{
    id: 0,
    name: "item 0"
}, {
    id: 1,
    name: "item 1"
}];
let id = 2;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/items', (req, res) => {
    let listedItems = {};
})

app.post('/post', (req, res) => {
    let body = req.body;

    let newItem = {
        id: id++,
        name: body.name
    };

    db.push(newItem);

    console.log("Item to add: ", newItem);
    console.log("db: ", db);
    res.send(newItem);
});

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
    console.log("Updated db: ", db);

    res.send(newInfo);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
