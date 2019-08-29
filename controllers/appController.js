const { Url, Tag, History } = require('../models')
const useragent = require('express-useragent');
const Sequelize = require("sequelize");

class appController {
    static index(req, res) {
        Url.findAll({
            where: {
                createdBy: req.session.userId
            },
            order: [['createdAt', 'DESC']],
            include: [Tag, History]
        })
            .then((urls) => {
                let data = {
                    urls,
                    page: 'index',
                    session: req.session,
                    selected: req.query.selected
                }

                res.render('app/template', data);
            }).catch((err) => {
                res.send(err)
            });
    }

    static testUserAgent(req, res) {
        console.log(req.headers['user-agent']);

        let source = req.headers['user-agent']
        let ua = useragent.parse(source);
        console.log('=============================');
        console.log(ua);
        res.send(ua)
    }
}

module.exports = appController