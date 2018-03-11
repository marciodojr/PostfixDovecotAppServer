'use strict';

const Domains = require('../models/virtual-domain');

// lista todos os domínios cadastrados
exports.getAll = function (req, res) {

    var p = Object.assign({
        startAt: 0,
        number: 30
    }, req.query);

    p.number = Math.min(p.number, 10);

    Domains.findAndCountAll({
        offset: parseInt(p.startAt),
        limit: parseInt(p.number)
    }).then(qr => {
        res.send({
            total: qr.count,
            domains: qr.rows
        });
    });
};

// // cria um novo domínio
exports.create = function (req, res) {
    res.status(500).send('consulta não implementada');
};

// retorna informações de um domínio
exports.get = function (req, res) {
    res.status(500).send('consulta não implementada');
};

// atualiza informações do domínio
exports.update = function (req, res) {
    res.status(500).send('consulta não implementada');
};

// remove um domínio
exports.delete = function (req, res) {
    res.status(500).send('consulta não implementada');
};