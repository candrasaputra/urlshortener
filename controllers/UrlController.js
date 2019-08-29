const { Url, Tag, UrlTags } = require('../models');

class UrlController {
    static showCreate(req, res) {
        Tag.findAll({
            where: {
                createdBy: req.session.userId
            }
        })
            .then((result) => {
                res.render('app/template', { page: "create", err: req.query.err, session: req.session, tagList: result })
            }).catch((err) => {
                res.redirect(`./create?err=${err.message}`)
            });
    }
    static create(req, res) {
        let data = req.body
        let id = req.session.userId
        data["createdBy"] = id
        let newUrl
        Url.create(data)
            .then((result) => {
                newUrl = result
                const arr = []
                for (const val of data.tags) {
                    arr.push({
                        UrlId: result.id,
                        TagId: Number(val)
                    })
                }
                return UrlTags.bulkCreate(arr, {
                    fields: ["UrlId", "TagId"]
                })
            })
            .then(() => {
                res.redirect('./')
            })
            .catch((err) => {
                res.redirect(`./create?err=${err.message}`)
            });
    }
}

module.exports = UrlController