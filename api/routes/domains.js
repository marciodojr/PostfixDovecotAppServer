'use strict';

module.exports = function (router) {
  var domainController = require('../controllers/domain');

  // Domain Routes
  router
    .get('/domains', domainController.getAll)
    .post('/domains', domainController.create);

  router
    .get('/domains/:domainId', domainController.get)
    .put('/domains/:domainId', domainController.update)
    .delete('/domains/:domainId', domainController.delete);
};
