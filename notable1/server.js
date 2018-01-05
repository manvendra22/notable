const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

MongoClient.connect(db.URL, (err, database) => {
    if(err) throw err;
    const db = database.db('temp');
    require('./app/routes/index')(app, db);

    app.listen(port, () => {
        console.log("Listening on port "+port);
    });
})