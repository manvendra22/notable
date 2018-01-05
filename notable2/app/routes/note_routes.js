module.exports = function(app, con){

    app.get('/notes/:id', function(req, res) {
        const sql = `SELECT title, body FROM notes WHERE id = ${req.params.id}`;
        con.query(sql, function(err, result) {
            if(err) throw err;
            res.send(result);
        })
    });

    app.post('/notes', function(req, res) {
        const sql = `INSERT INTO notes (title, body) VALUES ("${req.body.title}", "${req.body.body}")`;
        con.query(sql, function(err, result) {
            if(err) throw err;
            res.send(result);
        })
    });

    app.delete('/notes/:id', function(req, res) {
        const sql = "DELETE FROM notes WHERE id = ${req.params.id}";
        con.query(sql, function(err, result) {
            if(err) throw err;
            res.send(result);
        })
    })

    app.put('/notes/:id', function(req, res) {
        const sql = `UPDATE notes SET title="${req.body.title}", body="${req.body.body}" WHERE id=${req.params.id}`;
        con.query(sql, function(err, result) {
            if(err) throw err;
            res.send(result);
        })
    })
}