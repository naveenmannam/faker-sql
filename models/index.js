require("dotenv").config();
const mysql = require("mysql");
const uri = process.env.DB_URI;
const conn = mysql.createConnection(uri);
// const conn = mysql.createConnection({
//   host: "localhost",
//   user: "mona",
//   password: "Secret",
//   port: 3306,
//   database: "join_us"
// });

conn.connect(function(err) {
  if (err) {
    console.log("Error in connecting to DB , ", err);
    return;
  }
  console.log("Connection Success");
});

// conn.end(function(err) {
//   if (err) {
//     console.log("Error in closing the database ,", err);
//     return;
//   }
//   console.log("Database connection closed.");
// });

module.exports = conn;
