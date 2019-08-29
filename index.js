const express = require('express');
const session = require('express-session');
const useragent = require('express-useragent');

const app = express();
const { appRoute, FrontPageRoute, UserRoute, dataRoute, HistoryRoute } = require('./routes');

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }))
app.use(useragent.express());

app.locals.generateMD5 = require('./helpers/md5hash')

app.use(session({
    secret: 'r@h@s1@l!@hh3hsah3h3',
    resave: false,
    saveUninitialized: true,
    cookie: {}
}));

app.set('view engine', 'ejs');

app.use(express.static('public'))

const dataFormat = require('./helpers/dataFormat')
app.locals.dataFormat = dataFormat

const formatGrafik = require('./helpers/formatGrafik')
app.locals.formatGrafik = formatGrafik

// ------------------------------- //

app.use(function (req, res, next) {
    res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    next();
})

app.get('/', (req, res) => {
    res.redirect('/home')
})

app.use('/home', FrontPageRoute);
app.use('/app', appRoute);
app.use('/user', UserRoute);
app.use('/l', HistoryRoute);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))