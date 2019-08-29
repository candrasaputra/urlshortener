const express = require('express')
const router = express.Router()
const { History } = require('../models');

router.get('/url/:id', (req, res) => {
    History.findAll({
        where: {
            UrlId: 45
        },
        group: ['createdAt']
    })
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            res.send(err)
        });
});

module.exports = router