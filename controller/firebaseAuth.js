/**
 * define require module
 */
var express = require('express');
var router = express.Router();
var firebase = require('../config/config.js');
router.post('/', function(req, res) {
  authCredential(req.body,function(data){
    if(data.success!==undefined)
    {
      res.send(data);
    }else {
      res.send(data)
    }
  });
});
/********Verification Email and password********/
var authCredential  = function (data,callback){

  firebase.auth().signInWithEmailAndPassword(data.email, data.password).catch(function(err) {
        callback({"error":err.message});
      })
      .then(function(data) {
        //When Password is wrong again my promise will enter into then() block but data will be undefined
        if(data){
        callback({"success":data});
        }
      });
}


module.exports = router;
