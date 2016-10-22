var bodyParser = require('body-parser');
var express = require('express');
router = express.Router();
var jsonfile = require('jsonfile');

var firebase = require('../config/config.js');


router.post('/save', function(req, res) {
    var db = firebase.database();
    var ref = db.ref("sheet");
    //add data to firebase
    var postsRef = ref.child("sheetData");
    postsRef.orderByChild('author').equalTo('alanisawesome').on("child_added", function(data) {
        var key = data.key;
        postsRef.child(key).update({
            author: "alanisawesome123",
            title: "The Turing Machine123"
        })
    });
    // postsRef.push().set({
    //     author: "alanisawesome",
    //     title: "The Turing Machine"
    // });
}); //end of post
module.exports = router;
