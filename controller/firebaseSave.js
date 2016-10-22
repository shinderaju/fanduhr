var bodyParser = require('body-parser');
var express = require('express');
router = express.Router();
var jsonfile = require('jsonfile');

var firebase = require('../config/config.js');


router.post('/save', function(req, res) {
    var sheetJson = {
        "Sr No": 2,
        "Engg ID": 1122015005,
        "Name": "Naresh A Narsing",
        "PAN": "AOWPN2710C",
        "Bank Name": "",
        "Bank Account Number": 139110100025079,
        "IFSC Code": "ANDB0001391"
    }

    var db = firebase.database();
    var ref = db.ref("EnggBankInfo");
    var postsRef = ref.child("sheetData");
    //add data to firebase
    postsRef.once('value', function(snapshot) {
        if (!snapshot.hasChild('1122015005')) {
            console.log("That user not exists");
            postsRef.child('1122015006').set(sheetJson);
        } else {
            console.log("That user already exists");
            postsRef.child('1122015006').set(sheetJson);
        }
    }); //end of postsRef.once
}); //end of post
module.exports = router;
