var express = require('express');
var router = express();
var fs = require("fs");

router.delete('/products/:id', function (req, res) {

    fs.readFile("goods.json", 'utf8', function (err, data) {
        if(data === '' || data === []){
            
            res.status(404).json();
            
            return;
        }
        else{
            data = JSON.parse( data );
            
            for(var i=0;i<data.goods.length;i++){
                
                if( data.goods[i].id.tostring() === req.params.id ){
                    
                    data.goods.splice(i,1);

                    fs.writeFile(goods.json, JSON.stringify(data), function (err) {
                    });
                    res.status(204).json();

                    return;
                }
            }
        }
    });
});


module.exports = router;