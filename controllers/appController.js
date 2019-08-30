const { Url, Tag, History } = require('../models')
const useragent = require('express-useragent');
const Sequelize = require("sequelize");

class appController {
    static index(req, res) {
        let selected = (req.query.selected) ? req.query.selected : null;

        let promises = [Url.findAll({
            where: {
                createdBy: req.session.userId
            },
            order: [['createdAt', 'DESC']],
            include: [History]
        }), Url.findOne({
            where: {
                id: selected
            },
            include: [
                { model: Tag },
                {
                    model: History
                }]
        }), History.findAll({
            where: {
                UrlId: selected
            },
            attributes: [
                [Sequelize.fn('date_trunc', 'month', Sequelize.col('createdAt')), 'date'],
                [Sequelize.fn('count', Sequelize.col('id')), 'total']],
            group: [Sequelize.fn('date_trunc', 'month', Sequelize.col('createdAt'))]
        })]

        Promise.all(promises)
            .then((result) => {

                let data = {
                    urls: result[0],
                    page: 'index',
                    session: req.session,
                    selected: req.query.selected,
                    selectedDate: result[1],
                    history: result[2],
                    baseUrl: req.headers.host
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