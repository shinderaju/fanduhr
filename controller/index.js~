var express = require('express'),
    router = express.Router();
router.use('/auth',require('./firebaseAuth.js'));
router.use('/firebase',require('./firebaseSave.js'));
router.get('/demo', function(req, res) {
    res.send('This is main controller');
});


module.exports = router;
