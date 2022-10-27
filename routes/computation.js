var express = require('express');
const { route } = require('./mydata');
var router = express.Router();

router.get('/',function(req,res,next) {
    var x = Math.random();
    var y;
    y = req.query.y;
    if(y==undefined)
    {
        y=x;
    }
    res.render('computation',{ title: `f(${y}) is ${Math.cos(y)}`});

})

router.get(`/`,function(req,res,next){
    res.render('computation', { title: `f(${y} is ${Math.cos(y)}`});
    res.end();
})

module.exports = router;