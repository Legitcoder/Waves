const UsersController = require('../controllers/users_controller');

//export function to index.js and attach express app as the argument
module.exports = (app) => {
    app.get('/api', UsersController.hello);
}