const express = require('express');
const app = express();
const bodyparser = require('body-parser');
//var urlencoded = bodyparser.urlencoded();
app.set('view engine', 'ejs')
var port = process.env.PORT || 3002;
var path = require('path');
app.set('view engine','ejs')
app.use(bodyparser.json({ type: 'application/*+json' }))
app.use('/images', express.static(path.join(__dirname, 'views/images')))
 //app.use('/images', express.static(path.join(__dirname)))

app.get("/", function (req, res) {
     res.render('newfile')
 });

app.listen(port)
