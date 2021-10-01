var express = require('express');
var router = express.Router();

var connection = require('../config/connection');

/* GET home page. */
router.get('/', function(req, res, next) {
  connection.query('SELECT * FROM users', function (error, users) {
    if (error) {
      throw error;

    } else {
      res.render('index', { all_users: users });
    }
  })
 }); 

 
 router.post('/adduser', function (req, res) {
  const bookdata = {
    useranem: req.body.username,
    email: req.body.email,
    phone: req.body.phone,
  }

  connection.query("insert into users set?", user, function (err, result) {
    if (err) {
      console.error("Error");
    } else {
      res.redirect('/');
    }
  });

});

module.exports = router;

router.post('/deleteuser', function (req, res) {

  var idBooks = req.params.id;
  connection2.query("delete from users where userid = ?", [userid], function (err, result) {
    if (err) {
      console.error("Error");
    } else {
      res.redirect('/');
    }
  });
