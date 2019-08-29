const { Url, User, History } = require('../models');
const Sequelize = require("sequelize");

class FrontPageController {
    static main(req, res) {
        let promises = [Url.findOne({ attributes: [[Sequelize.fn('count', Sequelize.col('id')), 'total']] }), User.findOne({ attributes: [[Sequelize.fn('count', Sequelize.col('id')), 'total']] }), History.findOne({ attributes: [[Sequelize.fn('count', Sequelize.col('id')), 'total']] })]

        Promise.all(promises)
            .then((result) => {
                res.render('front', { url: result[0], user: result[1], history: result[2] })
            }).catch((err) => {
                res.send(err)
            });
    }

}

module.exports = FrontPageController