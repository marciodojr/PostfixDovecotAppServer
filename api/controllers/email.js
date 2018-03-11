'use strict';

const Emails = require('../models/virtual-user');

// lista todos os emails cadastrados
exports.getAll = function (req, res) {

    var p = Object.assign({
        startAt: 0,
        number: 30
    }, req.query);

    p.number = Math.min(p.number, 10);

    Emails.findAndCountAll({
        offset: parseInt(p.startAt),
        limit: parseInt(p.number)
    }).then(qr => {
        res.send({
            total: qr.count,
            emails: qr.rows
        });
    });
};

// // cria um novo email
exports.create = function (req, res) {
    res.status(500).send('consulta não implementada');
};

// retorna informações de um email
exports.get = function (req, res) {
    res.status(500).send('consulta não implementada');
};

// atualiza informações do email
exports.update = function (req, res) {
    res.status(500).send('consulta não implementada');
};

// remove um email
exports.delete = function (req, res) {
    res.status(500).send('consulta não implementada');
};