var mysql = require("myswl");

var conenction = mysql.createConnection({
    host: "localhost" ,

    port: 3306,

    user: "root",

    password: "Fuckthisgayearth4",
    database: "bamazon_db"
});

conenction.connect(function(err){
    if (err) throw err;
    console.log("connected as id " + conenction,threadId + "\n");
    createProduct
})