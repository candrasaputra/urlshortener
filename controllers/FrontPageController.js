const { Url } = require('../models');

class FrontPageController {
    static main(req, res) {
        Url.findAll()
            .then((result) => {
                res.render('front', { result })

            }).catch((err) => {
            });
    }

}

module.exports = FrontPageController