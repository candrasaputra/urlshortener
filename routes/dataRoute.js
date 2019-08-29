const express = require('express')
const router = express.Router()
const { History } = require('../models');
const Sequelize = require("sequelize");

router.get('/url/:id', (req, res) => {
    History.findAll({
        where: {
            UrlId: 45
        },
        attributes: [
            [Sequelize.fn('date_trunc', 'month', Sequelize.col('createdAt')), 'date'],
            [Sequelize.fn('count', Sequelize.col('id')), 'total']],
        group: [Sequelize.fn('date_trunc', 'month', Sequelize.col('createdAt'))]
    })
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            res.send(err)
        });
});

module.exports = router