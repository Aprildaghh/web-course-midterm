var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "zxcasd45",
    database: "web-20070006006"
})

const getDescriptionsById = (id) => {
    con.connect(function(err) {
        if(err) throw err;
    
        const sql = "SELECT * FROM description WHERE product_id=" + id;
            
        con.query(sql, function (err, result) {
            if (err) throw err;
            else return result;
        });
    })
}

const getProductsByCategory = (category) => {
    con.connect(function(err) {
        if(err) throw err;
        
        const sql = "select * from product where category like '%" + category.toLowerCase() + "%'";

        con.query(sql, function (err, result) {
            if (err) throw err;
            else return result;
        });

    })
}

console.log(getDescriptionsById(1));
console.log(getProductsByCategory("laptop"));


module.exports = {getDescriptionsById, getProductsByCategory}
