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
    connection.query('SELECT item_id,product_name,price,stock_quanity FROM `products`', function (error, results, fields) {

        console.log(results);

    });
});

    connection.end();
    inquirer.prompt([{

        type: "input",
        name:"whatItem",
        message:"Enter the id of the item that you would like to buy."
    },
        {   type: "input",
            name:"howMany",
            message: "How many would you like to buy?"

        }]).then(function (answers) {
        if( inquirer.howMany > results.stock_quanity) {
            Console.log("We don't have that many!");
        }
            else {
                console.log("Your order is processing.");
            }

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