"use strict";

var http = require('http');

var express = require('express');
var path = require('path');

var app = express();
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.static('public'));

app.use('/',function(req,res){
    res.render('index');
});

app.use('/api',function(req,res){[
    {id:"6a45sdf64asdf40",firstname:"Jim",lastname:"Jones",age:45},
    {id:"a6546ads6s46d4",firstname:"Bob",lastname:"Hamburg",age:23},
    {id:"fas6d4f646afff",firstname:"Fred",lastname:"Flinter",age:65},
    {id:"ads6f54a13asd1",firstname:"Joe",lastname:"Ford",age:34},
    {id:"4a64bacffeefdf",firstname:"Ralph",lastname:"Harmonson",age:14},
    {id:"asdfa4664afdfd",firstname:"Doug",lastname:"Sander",age:44}
]});

var port = process.env.PORT || 3500
; //sets port depending on environment, otherwise port 3500


app.listen(port, function(){
    console.log("Listening on localhost:"+port);
});
