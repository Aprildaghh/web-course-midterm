var mysql = require('mysql');

// TODO: change username and password
var con = mysql.createConnection({
    host: "localhost",
    user: "username",
    password: "password"
})

module.exports =  function(sql) {
    con.connect(function(err) {
        if(err) throw err;
        
        con.query(sql, function (err, result) {
            if (err) throw err;
            
            return result;
        });
    })
}
