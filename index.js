const express = require('express');
const app = express();
const { appRoute, FrontPageRoute } = require('./routes');

const PORT = process.env.PORT || 3000;


express.urlencoded({ extended: true })

app.set('view engine', 'ejs');

app.use(express.static('public'))


app.get('/', (req, res) => {
    res.redirect('/home')
})

app.use('/home', FrontPageRoute);
app.use('/app', appRoute);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))