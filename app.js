

var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');
var firebase = require('./model/firebase.js');
var logger = require('morgan');
var moment = require('moment');
var request = require('request');
var jsonfile = require('jsonfile');
var multer = require('multer');
var cors = require('cors');
var app = express();
app.set('port', process.env.NODE_PORT || 3000);
app.set('host', process.env.NODE_IP || 'localhost');
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.static('./fundooWeb'));
app.use(require('./controller/index.js'));
 
/*
 |--------------------------------------------------------------------------
 | Start the Server
 |--------------------------------------------------------------------------
 */

    app.listen(app.get('port'), app.get('host'), function() {
        console.log('Express server listening on port ' + app.get('port'));
    });

