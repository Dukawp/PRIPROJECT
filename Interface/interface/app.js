var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Authentication support modules
var uuid = require('uuid/v4');
var session = require('express-session');
var FileStore = require('session-file-store')(session);

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var axios = require('axios');
var flash = require('connect-flash');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

// Local strategy configuration
passport.use(new LocalStrategy(

  {usernameField: 'number'}, (number, password, done) => {

    var token = jwt.sign({}, "pri2019",
    {
      expiresIn: 3000,
      issuer: "PRI Server"
    })

    console.log("APP: Passport use!");
    axios.get('http://localhost:5012/users/' + number + '?token=' + token)
      .then(dados => {

        const user = dados.data;
        if(!user){
          console.log("APP: User not found!");
          return done(null, false, {message: 'User not found!\n'});
        }
        if(!bcrypt.compareSync(password, user.password)){
          //console.log(password);
          //console.log(user.password);
          return done(null, false, {message: 'Wrong password!\n'});
        }
        return done(null, user);
      })
      .catch(error => done(error))
  })
);

// Tell passport how to serialize a user
passport.serializeUser((user, done) => {

  //console.log('Going to serialize user ' + JSON.stringify(user));
  //User serialization. Passport saves in-session user here
  done(null, user.number);

});

// Deserialization: get user information from his id
passport.deserializeUser((number, done) => {

  var token = jwt.sign({}, "pri2019",
  {
    expiresIn: 3000,
    issuer: "PRI Server"
  })

  //console.log('Going to deserialize user ' + number);
  axios.get('http://localhost:5012/users/' + number + '?token=' + token)
    .then(dados => done(null, dados.data))
    .catch(error => done(error, false))
});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var adminRouter = require('./routes/admin');
var authRouter = require('./routes/auth');
var feedRouter = require('./routes/feed');
var groupsRouter = require('./routes/groups');
var eventsRouter = require('./routes/events');
var messagesRouter = require('./routes/messages');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(session({

  genid: req => {

    console.log('Inside middleware session...');
    console.log(req.sessionID);
    return uuid();

  },
  store: new FileStore(),
  secret: 'pri2019',
  resave: false,
  saveUninitialized: true

}));

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin', adminRouter);
app.use('/auth', authRouter);
app.use('/feed', feedRouter);
app.use('/groups', groupsRouter);
app.use('/events', eventsRouter);
app.use('/messages', messagesRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
