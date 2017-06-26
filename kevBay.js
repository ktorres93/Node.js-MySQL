var inquirer = require('inquirer');
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'kevbay'
});
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected to kevBay!");
    connection.query('SELECT * FROM `products`', function (error, results, fields) {
        // error will be an Error if one occurred during the query
        // results will contain the results of the query
        // fields will contain information about the returned results fields (if any)
    });
    console.log(connection.query());
    connection.end();
});

// CODE USED TO CREATE TABLE
// // CREATE TABLE products(
//     item_id MEDIUMINT NOT NULL AUTO_INCREMENT,
//     product_name VARCHAR(60) NOT NULL,
//     department_name VARCHAR(5) NOT NULL,
//     price INT(5) NOT NULL,
//     stock_quanity INT(5) NOT NULL,
//     autographed BOOL,
//     PRIMARY KEY (item_id)
// // );
// //CODE USED TO INSERT MOCK DATA INTO PRODUCTS TABLE
// INSERT INTO products (product_name,department_name,price,stock_quanity,autographed)
// VALUES (toothbrush, hygine,2,1,TRUE);