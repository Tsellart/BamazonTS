var mysql = require("myswl");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost" ,

    port: 3306,

    user: "root",

    password: "Fuckthisgayearth4",
    database: "bamazon_db"
});

conenction.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
})

conenction.connect(function(err){
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    startPurchase();

});

function startPurchase() {
    inquirer.prompt([
        {
            name: "id",
            type: "input",
            message: "What is the item you would like to buys ID?",
            validate: validateInput,
            filter: Number

        },
        {
            name: "stock_quantity",
            type: "input",
            message: "How many would you like?",
            validate: validateInput,
            filter:Number
        }
        ]).then(function(answer) {

            var item = input.id;
            var quantity = input.stock_quantity;

            connection.query(
                "SELECT * FROM products WHERE ?",
                {
                    id: item
                },

                function(err) {
                    if (err) throw err;
                    if (data.length === 0) {
                        console.log('ERROR: Invalid Item ID, please select a valid ID');
                        
                    } else {
                        var productData = data[0];

                        if (quantity <= productData.stock_quantity) {
                            console.log('Congrats! Your Item is ordered!');

                            connection.query("UPDATE products SET stock_quantity" + productData.stock_quantity - quantity + "WHERE id" + item);
                            console.log(this);
                            connection.end();
                        }
                    }
                } 

            )
        })
}