var express = require('express');
var router = express.Router();

var bannerData = {
  myData: [{
    id: 0,
    url: '',
    img: '/assets/images/001.png'
  }, {
    id: 1,
    url: '',
    img: '/assets/images/001.png'
  }, {
    id: 2,
    url: '',
    img: '/assets/images/001.png'
  }, {
    id: 3,
    url: '',
    img: '/assets/images/001.png'
  }, {
    id: 4,
    url: '',
    img: '/assets/images/001.png'
  }, ]
}
router.get('/getBanner', function(req, res, next) {
  req.session.user = 'gengzhuo';
  res.json(bannerData);
});


router.get('/getItemList', function(req, res, next) {
  var pageNum = req.query.pageNum

  var itemListData = { myData: [], status: pageNum > 5 ? false : true }
  for (var i = 0; i < 10; i++) {
    itemListData.myData.push({
      'title': pageNum + 'title' + i,
      'fowllerNum': i,
      'img': '/assets/images/002.png',
      'time': '2017-01-01 08:30',
      'id': (pageNum - 1) * 10 + i
    })
  }


  res.json(itemListData);

});

router.post('/postLogin', function(req, res) {
  if (req.body.name == 'gengzhuo' && req.body.pwd == '111111') {
    res.json({ "myData": { 'status': true, 'user': req.session.user, 'name': 'geng' } })
  } else {
    res.json({ "myData": { 'status': false, 'user': req.session.user, 'name': 'geng' } })
  }
});

module.exports = router;
