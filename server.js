var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var config={
    host:'http://db.imad.hasura-app.io',
    user:'athirakjayan',
    password:'db-athirakjayan-61590',
    database:'athirakjayan',
    port:'5432'

};
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var pool=require('pg').Pool;
app.get('/test_db',function(req,res){
    pool.query('select * from user',function(err,result){
        if(err){
            res.status(500).send(err.toString());
        }
        else
        {
            res.send(JSON.stringify(result));
        }
        
    });
});


app.get('/article-two',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});


app.get('/article-three',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
