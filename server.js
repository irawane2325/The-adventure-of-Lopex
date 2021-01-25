let express = require('express');
let path = require('path');
let app = express();

app.use(express.static('public'));


app.get('/welcome', function(req,res){
    res.sendfile(path.join(__dirname,'welcome.html'))
});


app.get('/home', function(req,res){
    res.sendfile(path.join(__dirname,'adventure.html'))
});

app.get('/buy', function(req,res){
    res.sendfile(path.join(__dirname,'buy.html'))
});

app.get('/build', function(req,res){
    res.sendfile(path.join(__dirname,'build.html'))
});
app.get('/discipline', function(req,res){
    res.sendfile(path.join(__dirname,'discipline.html'))
});
app.get('/food', function(req,res){
    res.sendfile(path.join(__dirname,'food.html'))
});
 

app.listen(8080)

