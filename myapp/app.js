const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let db = [{
    id: 0,
    name: "item 1"
}, {
    id: 1,
    name: "item 2"
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

    console.log("db:", db);
    console.log("item to update: ", itemToUpdate);

    if (itemToUpdate === undefined) {
        console.log("Item not found.");
        res.status(404).send("Item not found.");
        return;
    }

    itemToUpdate.name = newInfo.name;

    console.log("db: ", db);

    res.send(newInfo);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
