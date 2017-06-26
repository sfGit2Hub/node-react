var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    let deviceAgent = req.header("user-agent").toLowerCase();
    let agentId = deviceAgent.match(/(iphone|ipad|android)/);
    if (agentId) {
        console.log(deviceAgent);
        res.render('mobile/views/index', { title: 'Mobile-HelloWorld' });
    } else {
        console.log(deviceAgent);
        res.render('pc/views/index', { title: 'PC-HelloWorld' });
    }
});

module.exports = router;
