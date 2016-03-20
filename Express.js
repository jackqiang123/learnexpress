/**
 * Created by lianlu on 3/20/16.
 */
var express = require('express');
var app = express();

app.put('/message/:id', function(req, res){
    var mess = require('crypto')
        .createHash('sha1')
        .update(new Date().toDateString() + req.params.id)
        .digest('hex');
    res.end(mess);

});

app.listen(process.argv[2]);