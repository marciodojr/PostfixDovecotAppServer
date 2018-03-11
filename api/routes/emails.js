'use strict';

module.exports = function (router) {
  var emailController = require('../controllers/email');

  // Domain Routes
  router
    .get('/emails', emailController.getAll)
    .post('/emails', emailController.create);

  router
    .get('/emails/:emailId', emailController.get)
    .put('/emails/:emailId', emailController.update)
    .delete('/emails/:emailId', emailController.delete);
};
