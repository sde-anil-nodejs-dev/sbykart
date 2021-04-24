var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/kart', function (req, res, next) {
    res.send('@SBYkart.com Powered By SBY Technocrates India');
});

module.exports = router;
