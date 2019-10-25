var express = require('express');
var router = express.Router();
var Articles = require('../models/articles');

// router.get('/', function (req, res, next) {
//   res.send('respond with a resource');
// });

// articles.find({}, function (err, articles) {
//   if (err) {
//     return res.json({ 'success': false, })
//   }

//   return res.json({ 'success': true, 'articles': articles });


// });

router.get('/view/:slug', function (req, res, next) {
  res.render('articles/view', { title: 'xxx' });
});

router.get('/app', function (req, res, next) {
  res.render('articles/app', { title: 'APP' });
});

module.exports = router;