const useragent = require('express-useragent');

class appController {
    static index(req, res) {
        res.render('app/index');
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