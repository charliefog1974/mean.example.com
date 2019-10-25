var express = require('express');
var router = express.Router();
var articles = require('../../models/articles');

router.get('/', function(req, res, next) {

    articles.find({},function(err, articles){
      if(err){
       return res.json({'success':false, 'error': err});
      }
  
      return res.json({'success':true, 'articles': articles});
    });
  
  });
  
  router.get('/:articleId', function(req,res){
    
    var articleId = req.params.articleId;
  
    articles.findOne({'_id':articleId}, function(err, article){
      if(err){
        return res.json({'success':false, 'error': err});
      }
  
      return res.json({'success':true, 'article': article});
    });
  
  });
  
  router.post('/', function(req, res) {
    articles.create(new articles({
    }), function(err, article){
      
      if(err){
        return res.json({success: false, article: req.body, error: err});
      }
  
      return res.json({success: true, article: article});
      
    });
  });
  
  router.put('/', function(req, res){
  
      articles.findOne({'_id': req.body._id}, function(err, article){
    
       if(err) {
         return res.json({success: false, error: err});
       }
    
       if(article) {
    
        let data = req.body;
    
        if(data.articltitle){
          article.articletitle = data.articletitle;
        };

        article.save(function(err){
          if(err){
            return res.json({success: false, error: err});
          }else{
            return res.json({success: true, article:article});
          }
        });
    
       }
    
      });
      
    });
    router.delete('/:articleId', function(req,res){
  
      var articleId = req.params.articleId;
    
      articles.remove({'_id':articleId}, function(err,removed){
    
        if(err){
          return res.json({success: false, error: err});
        }
    
        return res.json({success: true, status: removed});
    
      });
    
    });
      
  
  module.exports = router;