USE bamazon_db;

CREATE TABLE products (
id INT NOT NULL AUTO_INCREMENT,

product_name VARCHAR(45) NULL,

department_name VARCHAR (45) NULL,

price DECIMAL (10,2) NULL, 

stock_quantity INT NULL, 

PRIMARY KEY (id)

);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hell Stinkers 3", "Electronics", 59.99, 300);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Television LARGE", "Electronics", 240.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Zune", "Electronics", 1.00, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Graphic Tee", "Clothing", 24.99, 180);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Holy Jean Shorts", "Clothing", 400.00, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sword of GOD", "Sporting Goods", 999999.99, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Crossbow", "Sporting Goods", 200.00, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Golf Ball", "Sporting Goods", 5.00, 500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Smerhseys Chocolate", "Food", 1.99, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Carrot Bits", "Food", 5.00, 400);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Underwear", "Clothing", 20.00, 300);