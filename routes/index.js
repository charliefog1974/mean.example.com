var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.session);
  res.render('index', { title: 'ExpressTrain' });
});

// To Be Used Later
// router.get('/auth/logout', function(req, res){
//   console.log(req.session);
//   req.logout();
//   console.log(req.session);
// });

module.exports = router;
