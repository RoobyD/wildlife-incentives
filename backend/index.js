const endangered_logic = require("/logic/endangered_logic.js")
const fencing_logic = require("/logic/fencing_logic.js")
const peace_logic = require("/logic/peace_logic.js")
const cam_logic = require("/logic/cam_logic.js")

const express = require('express');

app = express();

app.use(express.static('dist'));

app.get('/api', (req, res) => {

})

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})