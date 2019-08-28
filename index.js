const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

express.urlencoded({ extended: true })

app.set('view engine', 'ejs');

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('front')
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))