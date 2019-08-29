const { Url } = require('../models');

class UrlController {
    static showCreate(req, res) {
        res.render('app/template', { page: "create", err: req.query.err, session: req.session })
    }

    static create(req, res) {
        Url.create(req.body)
            .then((result) => {
                res.redirect('./')
            }).catch((err) => {
                res.redirect(`./create?err=${err.message}`)
            });
    }
}

module.exports = UrlController