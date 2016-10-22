var bodyParser = require('body-parser');
var express = require('express');
router = express.Router();
var jsonfile = require('jsonfile');

var firebase = require('../config/config.js');


router.post('/save', function(req, res) {
    var db = firebase.database();
    var ref = db.ref("sheet1");
    var postsRef = ref.child("sheetData");
    //add data to firebase
    postsRef.once('value', function(snapshot) {
        if (!snapshot.hasChild('0112201534')) {
            console.log("That user not exists");
            postsRef.child('0112201534').set({
                author: '0112201534'
            });
        } else {
            console.log("That user already exists");
            postsRef.child('0112201534').set({
                author: '0112201534'
            });
        }
    }); //end of postsRef.once
}); //end of post
module.exports = router;

