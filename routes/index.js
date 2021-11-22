var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use((req, res) => {
  res.render('error.ejs', {message:'404 Not Found', error: 'Aradığınız Sayfa Bulunamadı.'})
})

module.exports = router;
