var firebase = require('firebase');
 var config = {
   apiKey: "AIzaSyBBji58hVCjn06VM1Fg9Klu0-KPXfFLiaU",
   authDomain: "fundoohr.firebaseapp.com",
   databaseURL: "https://fundoohr.firebaseio.com",
   storageBucket: "fundoohr.appspot.com",
   messagingSenderId: "248966086188"
  };
 firebase.initializeApp(config);

  module.exports=firebase;
  // // Initialize Firebase
  // var config = {
  //   apiKey: "AIzaSyC6MyRQAQEDUrKQn_l8HiskEYGjtNn1-wY",
  //   authDomain: "bridgedb-144004.firebaseapp.com",
  //   databaseURL: "https://bridgedb-144004.firebaseio.com",
  //   storageBucket: "bridgedb-144004.appspot.com",
  //   messagingSenderId: "694105719284"
  // };
  // firebase.initializeApp(config);
  // module.exports=firebase;
