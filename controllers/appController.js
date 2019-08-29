const { Url, Tag } = require('../models')
const useragent = require('express-useragent');

class appController {
    static index(req, res) {
        Url.findAll({
            where: {
                createdBy: req.session.userId
            },
            include: [{
                model: Tag
            }]
        })
            .then((urls) => {
                let data = {
                    urls,
                    page: 'index',
                    session: req.session
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