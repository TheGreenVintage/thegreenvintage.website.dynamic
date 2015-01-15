var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.redirect('/' + req.locale + '/home');
});

module.exports = router;
