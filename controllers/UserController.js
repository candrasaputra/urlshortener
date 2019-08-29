const { User } = require('../models');
const compare = require('../helpers/compare')

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

    static login(req, res) {
        if (req.session.userId) {
            res.redirect('/app')
        } else {
            res.render('./users/login', { err: req.query.err })
        }
    }

    static doLogin(req, res) {
        const { email, password } = req.body

        User.findOne({
            where: { email }
        }).then((user) => {
            if (user) {
                if (compare(password, user.password)) {
                    req.session.userId = user.id
                    req.session.username = user.username
                    req.session.email = user.email

                    res.redirect('/app');
                } else {
                    res.redirect('/user/sign-in?err=username atau password salah');
                }
            } else {
                res.redirect('/user/sign-in?err=username atau password salah');
            }
        }).catch((err) => {
            res.send(err);
        });
    }

    static logout(req, res) {
        return req.session.destroy(function (err) {
            res.redirect('/user/sign-in')
        })
    }
}

module.exports = UserController