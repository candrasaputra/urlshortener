const express = require('express');
const app = express();
const { appRoute, FrontPageRoute, UserRoute } = require('./routes');

const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs');

app.use(express.static('public'))


app.get('/', (req, res) => {
    res.redirect('/home')
})

app.use('/home', FrontPageRoute);
app.use('/app', appRoute);
app.use('/user', UserRoute);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))