var mysql = require('mysql')
var db;

var settings = {

    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ums'
};

function connectdatabase() {

    if (!db) {
        db = mysql.createConnection(settings);

        db.connect(function (err) {
        })
    }
    return db;

}

module.exports=connectdatabase(); 