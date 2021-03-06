var express = require('express');
var session = require('express-session');
var path = require('path');
var app = express();
app.set('view engine', 'html');

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.engine('html', require('ejs').renderFile);
app.use("/public", express.static(path.join(__dirname,'public')));

app.get('/', function(request, response) {
    response.render('main.html');
});


var port = process.env.PORT || 3000;
app.set('port', port);
app.listen(port, function() {
    console.log("Server running in %d",port);
});

