require("dotenv").config();
const express = require("express");
const conn = require("../models");
const router = express.Router();

router
  .route("/")
  .get((req, res, next) => {
    conn.query("SELECT count(*) as count FROM users LIMIT 10", function(
      err,
      results,
      fields
    ) {
      if (err) throw err;
      let count = results[0].count;
      res.status(200).render("index.ejs", {
        count: count
      });
    });
  })
  .post((req, res, next) => {
    person = [{ email: req.body.email }];
    q = `INSERT INTO users SET ?`;
    conn.query(q, person, function(err, result, fields) {
      if (err) {
        res.status(400).json({ message: "Error creating user" });
        return;
      }
      res.status(200).redirect("/");
    });
  });

module.exports = router;
