var express = require('express');
var router  = express.Router();

router.get('/japanese', function(req, res) {
    console.log("inside the /japanese route");
    var db = req.db;
    var collection = db.get('japanesecollection');
    collection.find({},{},function(e,docs){
        res.render('userlist', {
            "userlist" : docs
        });
    });
});

module.exports = router;

