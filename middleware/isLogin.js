module.exports = function (req, res, next) {
    if (req.session.userId) {
        next()
    } else {
        res.redirect('/user/sign-in?err=anda tidak memiliki hak mengakses halaman ini.');
    }
}