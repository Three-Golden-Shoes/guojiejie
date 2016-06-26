var express = require('express');
var router = express();
var fs = require("fs");
var bodyParser=require("body-parser");

router.use(bodyParser.json({limit: '1mb'}));  //body-parser 解析json格式数据
router.use(bodyParser.urlencoded({            //此项必须在 bodyParser.json 下面,为参数编码
    extended: true
}));

router.post('/products', function (req, res) {
     var item=req.body;
     if ( typeof (item.barcode) != 'string' ||
          typeof (item.name)    != 'string' ||
          typeof (item.unit)    != 'string' ||
          typeof (item.price)   != 'number') {

          res.status(400).json();

        return;
    }
    fs.readFile("goods.json", 'utf8', function (err, data) {
            if(data === '' || data === {})
            {
                data={goods:[],idValue:1};
            }
            else{
                data = JSON.parse( data );
            }

            var good={
                id:data.idValue,
                barcode:item.barcode,
                name:item.name,
                price:item.price,
                unit:item.unit};
            var len=data.items.length;
            data.goods[len]=good;
            data.idValue++;

        fs.writeFile('goods.json', JSON.stringify(data), function (err) {

        });
        res.status(201).json(data.goods);
    });
});

module.exports = router;