// -- TP : to do list  ----

var express = require('express'); // Framework pour application web
var ejs = require('ejs'); // Template de page HTML
var parser = require('body-parser'); // Parse les champs

var app = express();
app.use(express.static(__dirname )); // Defini la racine de façon statique

app.use(parser.urlencoded({ extended: false })); // Parse l'url en attente d'un string ou d'un tableau
app.use(parser.json()); // Retoune un middleware ne parsant que du JSON

// -- Subdivision des modules par page --
var test = require('./scripts/welcome_page_script'); // fait appel à welcome_page_script.js

var cookieParser = require('cookie-parser');
var session = require('express-session');  // Charge le middleware de sessions

// set the view engine to ejs
app.set('view engine', 'ejs');


// --- Routing pour todolist --

app.get('/',function(req,res){ // -- Racine --
    res.render('pages/index',{ title: 'Welcome'});
})

app.use(cookieParser());

app.use(
    session({
        name:'super_cookie',
        secret: 'topsecret',
        resave: true,
        saveUninitialized: true
    }) //créer une session unique au nom de l'utilisateurs
)
