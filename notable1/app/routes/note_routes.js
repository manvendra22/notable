const ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {

    app.get('/notes/:id', function(req, res) {
        const details = {'_id': new ObjectID(req.params.id)};
        db.collection('notes').findOne(details, (err, result) => {
            if(err) throw err;
            res.send(result);
        })
    });

    app.post('/notes', function(req, res) {
        const note = {title: req.body.title, body: req.body.body};
        db.collection('notes').insert(note, (err, result) => {
            if(err) throw err;
            res.send(result);
        })
    });

    app.delete('/notes/:id', function(req, res) {
        const details = {'_id': new ObjectID(req.params.id)};
        db.collection('notes').remove(details, (err, result) => {
            if(err) throw err;
            res.send(result);
        })
    });

    app.put('/notes/:id', function(req, res) {
        const details = {'_id': new ObjectID(req.params.id)};
        const note = { title: req.body.title, body: req.body.body };
        db.collection('notes').update(details, note, (err, result) => {
            if(err) throw err;
            res.send(result);
        })
    })
};