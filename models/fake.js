require("dotenv").config();
const faker = require("faker");
const conn = require("./dbconn");

function generatePersons(count) {
  let data = [];
  for (let i = 1; i <= count; i++) {
    data.push([faker.internet.email(), faker.date.past()]);
  }
  return data;
}

const users = generatePersons(500);

q = "INSERT INTO users (email, created_at) VALUES ?";

conn.query(q, [users], function(err, results, fields) {
  if (err) throw err;
  console.log("Insert Success");
});

conn.end();
