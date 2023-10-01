module.exports = function(app) {
    var contact_me = require('../controllers/contact_me.server.controller');
    app.get('/contact_me', contact_me.render);
};