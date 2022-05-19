//Inicio
const path =require('path');
const express= require('express');
const mongoose= require('mongoose');
const morgan = require('morgan');
const flash = require('connect-flash');
const session = require('express-session');
var MongoDBStore = require('connect-mongodb-session')(session);
const passport = require('passport');
const cookieParser = require('cookie-parser');


var app=express();

app.use(morgan('dev'));

require('./Modelo/Autenticación/Local.js')(passport);
app.use(express.urlencoded({extended: false}));

var store = new MongoDBStore({
  uri: 'mongodb://localhost:27017/ofdetra',
  collection: 'sesiones'
});

app.use (session({
  key: 'session_cookie_secret',
  secret: 'session_cookie_secret',
  rolling: true,
  cookie:{
    path: '/',
    httpOnly: true,
    maxAge: 'COOKIE_TIMEOUT',
    maxAge: 1000 * 60 * 60 * 24 * 365
  },
  maxAge: 1000 * 60 * 60 * 24 * 365,
  store,
  resave: false,
  saveUninitialized: false
}));

app.use(cookieParser());

//carpeta publica del servidor con el nombre de public
app.use(express.static(path.join(__dirname,"/Public")));

//carpeta publica del servidor con el nombre de vista
app.set("views",path.join(__dirname,"Vista"));
app.set("view engine","ejs");

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use((req,res,next)=> 
{
  app.locals.confirm = req.flash("confirm");
  app.locals.error = req.flash("error");
  console.log(app.locals.confirm,app.locals.error)
  app.locals.usuario = req.user;
  next();
});

//conexion a db
mongoose.connect('mongodb://localhost/ofdetra')
  .then(db=>console.log('db connected'))
  .catch(err=>console.log(err));

//carpeta publica del servidor con el nombre de rutas
var rutas=require("./Controlador/HTTP/index.js");
app.use(rutas(passport));

//carpeta publica del servidor con el nombre de servidor
app.listen(3000,()=>{
  console.log("Servidor Conectado");

});


// app.use(flash());
// app.use(passport.initialize());
// app.use(passport.session());
//
// app.use((req, res, next) => {
//   app.locals.confirm = req.flash("confirm");
//   app.locals.error = req.flash("error");
//   app.locals.nombre = "hcincerpaz";
//   app.locals.usuario = req.user;
//   //console.log(app.locals)
//   next();
// });
// var favicon = require('serve-favicon');
// app.use(favicon(path.join(__dirname,'public','img','favicon2.ico')));
