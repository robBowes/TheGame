const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path')
const compression = require('compression')

const app = express();

app.use(bodyParser.raw({type: '*/*'}));
app.use(compression());

app.use('/robBowes/TheGame', express.static(path.join(__dirname, '../frontend/build')))

app.get('/', (req, res) => {
    // res.writeHead(200, { 'Content-Encoding': 'gzip' });
    fs.createReadStream('../frontend/build/index.html',  "utf-8")
        .pipe(res)
});

app.listen(8080, () => console.log("App listening on port: 8080... "))