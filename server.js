// load the things we need
var express = require('express');
var app = express();
var bodyParser = require('body-parser')


// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// use res.render to load up an ejs view file
app.get('/login',  function(req, res) {
    const username = req.query.username;
    const password = req.query.password;
    console.log(username, password);
    res.render('login');
});

app.post('/login', function(req, res){
    const username = req.body.username;
    const password = req.body.password;
    console.log(username, password);
    res.render('index', {msg: `Hello ${username}`})
});
// index page
app.get('/',  function(req, res) {
    res.render('index');
});

// about page
app.get('/suwit',  function(req, res) {
    res.render('suwit');
});

app.listen(8080);
console.log('8080 is the magic port');