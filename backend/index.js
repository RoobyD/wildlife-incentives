const express = require('express');

app = express();

app.use(express.static('dist'));

app.get('/api', (req, res) => {

})

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})