const { User } = require('../models');

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

class UserController {
    static register(req, res) {
        res.render('./users/register', { err: req.query.err })
    }

    static create(req, res) {
        console.log(req.body);
        User.create(req.body)
            .then((newUser) => {
                res.redirect(`/user/successRegister?name=${newUser.username}`)
            }).catch((err) => {
                res.redirect(`/user/register?err=${err.message}`)
            });
    }

    static update(req, res) {
        const { id } = req.params
        User.update(req.body)
            .then(() => {
                res.redirect(`user/${id}/edit?success=1`)
            }).catch((err) => {
                res.redirect(`/user/${id}/edit?err=${err.message}`)
            });
    }

    static edit(req, res) {
        const { success, err } = req.query
        res.render('./users/edit', { success, err })
    }

    static registerStatus(req, res) {
        const { name } = req.query
        res.render('./users/registerStatus', { name })
    }

    static loginPage(req, res) {
        res.render('./users/login', { err: req.query.err })
    }

    static login(req, res) {

    }
}

module.exports = UserController