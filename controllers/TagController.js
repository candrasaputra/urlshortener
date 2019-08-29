const { Tag } = require('../models');

class TagController {
    static showCreate(req, res) {
        Tag.findAll({
            where: {
                createdBy: req.session.userId
            },
            order: [["updatedAt", "Asc"]]
        })
            .then((result) => {
                res.render('app/template', {
                    page: "tagsCreate",
                    tagList: result,
                    session: req.session,
                    err: req.query.err,
                    success: req.query.success
                })
            }).catch((err) => {
                res.redirect(`/app/tags?err=${err.message}`)
            });

    }

    static create(req, res) {
        let input = req.body.tagLists.split(',').map(el => el.trim())
        let id = req.session.userId
        const arr = []
        for (const val of input) {
            arr.push({
                tagName: val,
                createdBy: id
            })
        }
        Tag.bulkCreate(arr, {
            fields: ["tagName", "createdBy"],
            updateOnDuplicate: ["tagName"]
        })
            .then((result) => {
                res.redirect('/app/tags?success=1')
            }).catch((err) => {
                res.redirect(`/app/tags?err=${err.message}`)
            });
    }

    static showEdit(req, res) {
        Tag.findByPk(req.params.id)
            .then((result) => {
                res.render('app/template', {
                    page: "tagsEdit",
                    tag: result,
                    session: req.session,
                    err: req.query.err,
                    success: req.query.sucess
                })
            }).catch((err) => {
                res.redirect(`/app/tags/${req.params.id}/edit?err=${err}`)
            });
    }

    static edit(req, res) {
        const id = req.params.id

        Tag.update(req.body, {
            where: {
                id
            }
        })
            .then((result) => {
                res.redirect(`/app/tags?success=edit`)
            }).catch((err) => {
                res.redirect(`/app/tags/${req.params.id}/edit?err=${err.message}`)
            });
    }

    static delete(req, res) {
        const id = req.params.id
        Tag.destroy({
            where: {
                id
            }
        })
            .then((result) => {
                res.redirect(`/app/tags?success=delete`)
            }).catch((err) => {
                res.redirect(`/app/tags?err=${err.message}`)
            });
    }
}

module.exports = TagController