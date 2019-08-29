const { Url, History } = require('../models')

class HistoryController {
    static getHistory(req, res) {
        let data
        const shortened = req.params.shortened
        Url.findOne({
            where: {
                shortened
            }
        })
            .then((result) => {
                data = result
                const { browser, os, platform } = req.useragent
                return History.create({
                    browser,
                    OS: os,
                    device: platform,
                    UrlId: data.id
                })
            })
            .then(() => {
                res.redirect(`${data.full}`)
            })
            .catch((err) => {
                res.send(err)
            });
    }
}

module.exports = HistoryController