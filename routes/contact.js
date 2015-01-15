var express = require('express');
var router = express.Router();
var domain = 'thegreenvintage.com';
var mailgun = require('mailgun-js')({apiKey: process.env.MAILGUN_API_KEY, domain: domain});

router.get('/email', function(req, res) {
  var data = {
    from: 'Excited User <me@samples.mailgun.org>',
    to: 'fcsonline@gmail.com',
    subject: 'Hello',
    text: 'Testing some Mailgun awesomness!'
  };
  
  mailgun.messages().send(data, function (error, body) {
    console.log(body);
    res.send('Email sent');
  });
});

module.exports = router;
