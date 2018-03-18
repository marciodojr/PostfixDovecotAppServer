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
    if(req.body.domain) {
        
        Domains.create({
            name: req.body.domain
        }).then(function(d){
            d.save().then(function(){
                res.status(201).send('Domínio cadastrado com sucesso');
            }).catch(function(error){
                res.status(400).send('Não foi possível salvar o domínio');
            });
        }).catch(function(error){
            if(error.original.errno == 1062) {
                res.status(400).send('Domínio já cadastrado');
            }
        });

        return;
    }
    res.status(400).send('Nenhum domínio foi informado');
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