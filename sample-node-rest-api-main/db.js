const mysql = require("mysql");

let credentials = {
  host: process.env.HOST,
  user: process.env.USERS,
  password: process.env.PASSWORD,
  database: process.env.DB
}

// Create a connection to the database
const connection = mysql.createConnection(credentials);


// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;

// connection string mysql
// mysql://uzjvo0gx6waeafuc:PdXF50Z5VEnbwPSU6sz5@b5dbw0ourkd8kb8czlqg-mysql.services.clever-cloud.com:3306/b5dbw0ourkd8kb8czlqg