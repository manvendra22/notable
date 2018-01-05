const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const db = require('./config/db');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

const con = mysql.createConnection(db);

con.connect(function(err) {
    if(err) throw err;
    require('./app/routes/index')(app, con);

    app.listen(port, () => {
        console.log("Listening on port "+port);
    });
});