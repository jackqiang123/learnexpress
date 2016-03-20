/**
 * Created by lianlu on 3/20/16.
 */
var express = require('express');
var app = express();
var path = require('path');
var bodyparser = require('body-parser')
//app.set('views', process.argv[3]);
//app.set('view engine', 'jade');
//
//app.get('/home', function(req, res){
//    res.render('index', {date: new Date().toDateString()})
//}).listen(process.argv[2]);
app.use(bodyparser.urlencoded({extended: false}));
app.post('/form', function(req, res){
    var recdata = req.body.str.split('').reverse().join('');
    res.end(recdata);
});
app.listen(process.argv[2]);