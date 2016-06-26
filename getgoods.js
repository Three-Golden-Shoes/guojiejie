var express = require('express');
var router = express();
var fs = require("fs");

router.get('/products/:id', function (req, res) {    //function(req,res,next) next可调转到下一函数，执行下一函数。
    fs.readFile(goods.json, "utf8", function (err, data) {
        if (data === '' || data === {}) {
            res.status(404).json();
        }
        else {

            data = JSON.parse(data);

            for (var i = 0; i < data.goods.length; i++) {
                if (data.goods[i].id.toString() === req.params.id) {
                    var item = data.goods[i];
                    break;
                }
            }
            if (i === data.items.length) {
                res.status(404).json();
            }
            res.status(200).json(item);

        }
    });
});


/*
* router.get('/products/:id', function (req, res,next){
*
* console.log("...........");
* next();
*
*
* },function(req,res,next){
*
* });
*
* */
/*
*
* headersent
*
*
* */


module.exports = router;