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

 

module.exports = router;
