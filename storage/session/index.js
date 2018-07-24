var session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const config = require('config');

const store = new MongoStore({url: config.get('db:uri')});


const sessionMV = session({
    secret: config.get('session:secret')
    , 
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, httpOnly: true }
    , store
})


module.exports = {
    mw: sessionMV
}