const cors = require('cors')

const recommendedProtection = require("./logic/endangered_logic")
const recommendedFencing = require("./logic/fencing_logic.js")
const recommendedPeace = require("./logic/peace_logic.js")
const recommendedCam = require("./logic/cam_logic.js")

const express = require('express');


app = express();

app.use(cors())
app.use(express.static('dist'));
app.use(express.json());

app.post('/api/submission', (req, res) => {
    const recProtection = recommendedProtection(req.body.county, req.body.acreage)
    const recFencing = recommendedFencing(req.body.fencingStrategy, req.body.alternativeFencing, req.body.acres)
    const recPeace = recommendedPeace(req.body.acreage, req.body.deterrents)
    const recCam = recommendedCam(req.body.county)
    console.log(recProtection)
    console.log(recFencing)
    console.log(recPeace)
    console.log(recCam)
})

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})