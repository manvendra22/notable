const note_routes = require('./note_routes');

module.exports = function(app, con) {
    note_routes(app, con);
}