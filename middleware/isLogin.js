app.get('/user/:id', function (req, res, next) {
    res.end(req.params.id)
})