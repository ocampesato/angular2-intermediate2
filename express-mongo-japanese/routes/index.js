var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});

/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
	res.render('helloworld', { title: 'Hello, World!' })
});

/* GET Userlist page. */
router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('users');

    collection.find({},function(e,docs){
console.log("2docs = "+JSON.stringify(docs)); 
        res.render('userlist', {
            "userlist" : docs
        });
    });
});

/* GET New User page. */
router.get('/newuser', function(req, res) {
    res.render('newuser', { title: 'Add New User' });
});

/* POST to Add User Service */
router.post('/adduser', function(req, res) {
    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var fname  = req.body.fname;
    var lname  = req.body.lname;

    // Set our collection
  //var collection = db.get('usercollection');
    var collection = db.get('users');

    // Submit to the DB
    collection.insert({
        "fname" : fname,
        "lname" : lname 
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // If it worked, set the header so the 
            // address bar doesn't display /adduser
            //res.location("userlist");
            // And forward to success page
            res.redirect("userlist");
        }
    });
});

router.get('/japanesejson', function(req, res) {
    console.log("inside the /japanesejson route");

    var db = req.db;
    var collection = db.get('dictionary');

    collection.find({},{},function(e,docs){
console.log("japanese docs = "+JSON.stringify(docs)); 
        res.json(docs);
    });
});

router.get('/japanese', function(req, res) {
    console.log("inside the /japanese route");

    var db = req.db;
    var collection = db.get('dictionary');

    collection.find({},{},function(e,docs){
console.log("japanese docs = "+JSON.stringify(docs)); 
        res.render('japanese', {
            "dictionary" : docs
        });
    });
});

module.exports = router;
