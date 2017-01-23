var express = require('express');
var app = express();
var PORT = 3000;
var middleware = {
    requireAuthentication: function(req, res,next){
        console.log('Please Login');
        next();
    },
    logger: function(req, res, next){
        console.log("Request: " + new Date().toString() + " " + req.method + " " + req.originalUrl);
        next();
    }
};

app.use(middleware.logger);
//app.use(middleware.requireAuthentication);

app.get('/about',middleware.requireAuthentication,function(req,res){
    res.send("About Us!!");
});

app.use(express.static(__dirname + '/public/html'));

app.listen(PORT, function(){
    console.log("express server started at port " + PORT);
});