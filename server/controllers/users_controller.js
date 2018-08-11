const User = require('../models/user');

module.exports = {
    hello(req, res) {
        res.send({message: 'Hello World'});
    }

}