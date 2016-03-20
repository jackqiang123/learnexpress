/**
 * Created by lianlu on 3/20/16.
 */
var express = require('express');
var app = express();
var fs = require('fs');

app.get('/books', function(req, res){


    var file;
    fs.readFile(process.argv[3], function(err, data){
        file = data;
        var object = JSON.parse(file);
        res.json(object);
    });


});

app.listen(process.argv[2]);