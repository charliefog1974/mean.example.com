var express = require('express');
var router = express.Router();
var Articles = require('../models/articles');

router.get('/', function(req, res, next) {
  articles.find({
    if(err){
      return res.json({'success':false, })
    }
  })
  res.render('articles/index', { title: 'xxx' });
});

router.get('/view/:slug', function(req, res, next) {
  res.render('articles/view', { title: 'xxx' });
});

router.get('/app', function(req, res, next) {
  res.render('articles/app', { title: 'APP' });
});

module.exports = router;