var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs = require("fs");

fs.stat("goods.json", function (err, stats) {
    if ((stats && stats.isFile())) {
    }
    else {fs.open("goods.json", "a", function (err, fd) {
            if (err) {
                console.log('创建失败！');
            }
        });
    }
});

app.use(bodyParser.json());

app.use('/', require('./addgoods'));
app.use('/', require('./deletegoods'));
app.use('/', require('./getallgoods'));
app.use('/', require('./getgoods'));
app.use('/', require('./updategoods'));

app.listen(3000);