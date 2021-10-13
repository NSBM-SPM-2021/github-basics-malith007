var express = require('express');
var router = express.Router();

var connection = require('../config/connection');

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
  const user = {
    username: req.body.username,
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

router.get('/deleteuser/:id', function (req, res) {

  var userid = req.params.id;
  connection.query("delete from users where id = ?", [userid], function (err, result) {
      res.redirect('/');
  });

});

module.exports = router;
