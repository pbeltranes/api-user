const models = require('../models');
const { User } = models;



module.exports = app => {

  // Authentication
  app.route('/register')
    .post(register)
  app.route('/login')
    .post(login)

  // Middleware para autenticación
  app.use(verifyToken);

  app.route('/me')
    .get(me)
};