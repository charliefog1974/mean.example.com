var express = require('express');
var router = express.Router();
var Articles = require('../models/articles');
var today = new Date();

// router.get('/', function (req, res, next) {
//   res.send('respond with a resource');
// });

// articles.find({}, function (err, articles) {
//   if (err) {
//     return res.json({ 'success': false, })
//   }

//   return res.json({ 'success': true, 'articles': articles });


// });

router.get('/app', function (req, res, next) {
  res.render('articles/app', { title: 'Article Management' });
});

router.get('/', function (req, res, next) {
  Articles.find({}, function (err, articles) {
    console.log(articles);
    if (err) {
      return handleError(err);
    }
    return res.render('articles/index', { title: 'Articles', articles: articles });

  });
});

router.get('/view/:slug', function (req, res, next) {
  Articles.findeOne({ slug: req.params.slug }, function (err, articles) {
    if (err) {
      return handleError(err);
    }
    else {
      return res.render('articles/view', { title: 'Articles', article: articles });
    }
  });
});

// res.render('articles/view', { title: 'xxx' });
// });

module.exports = router;