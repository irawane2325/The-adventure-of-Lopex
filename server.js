let express = require('express');
let path = require('path');
let app = express();

app.use('/style.css',express.static(path.join(__dirname + '/public')));

app.get('/home', function(req,res){
    res.sendfile(path.join(__dirname,'adventure.html'))
})

app.get('/buy', function(req,res){
    res.sendfile(path.join(__dirname,'buy.html'))
})

app.get('/build', function(req,res){
    res.sendfile(path.join(__dirname,'build.html'))
})
 

app.listen(8080)

