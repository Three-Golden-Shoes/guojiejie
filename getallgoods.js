var express = require('express');
var router = express();
var fs = require("fs");

router.get('/products', function (req, res) {
    fs.readFile("goods.json", 'utf8', function (err, data) {

        if (data === '' || data === {}) {
            res.status(200).json([]);

        }
        else {
            data = JSON.parse(data);

            res.status(200).json(data.goods);
        }
    });
});

module.exports = router;