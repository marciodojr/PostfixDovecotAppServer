'use strict';

const DB_CONFIG = require('../../config/db-config');
const Sequelize = require('sequelize');


var sqConf = {
    host: DB_CONFIG.host,
    dialect: DB_CONFIG.dialect,
    operatorsAliases: DB_CONFIG.operatorsAliases,
    pool: DB_CONFIG.pool
};

if (DB_CONFIG.dialect === 'sqlite') {
    sqConf.storage = DB_CONFIG.storage;
}

const SEQUELIZE = new Sequelize(DB_CONFIG.database, DB_CONFIG.username, DB_CONFIG.password, sqConf);


SEQUELIZE
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = {
    SEQUELIZE: SEQUELIZE,
    DATA_TYPES: Sequelize
};