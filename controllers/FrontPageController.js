const { Url, User, History } = require('../models');
const Sequelize = require("sequelize");

class FrontPageController {
    static main(req, res) {
        let promises = [Url.countAll(), User.countAll(), History.countAll()]

        Promise.all(promises)
            .then((result) => {
                res.render('front', { url: result[0], user: result[1], history: result[2] })
            }).catch((err) => {
                res.send(err)
            });
    }

}

module.exports = FrontPageController