const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const { appRoute } = require('./routes')

express.urlencoded({ extended: true })

app.set('view engine', 'ejs');

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('front')
})

app.use('/app', appRoute);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))