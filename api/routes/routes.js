'use strict';

const domainRoutes = require('./domains');
const emailRoutes = require('./emails');

module.exports = function(router) {
    domainRoutes(router);
    emailRoutes(router);
};
