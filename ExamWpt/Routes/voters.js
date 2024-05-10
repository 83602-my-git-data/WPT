const express = require("express");
const jwt = require("jsonwebtoken");
const { successResponse, errorResponse } = require("../Utils/utils");
const { pool } = require("../Utils/DbUtils");
const config = require("config");
const secretkey = config.get("encryptionKey");

const app = express.Router();

app.get("/candidate_list", (request, response) => {
  pool.query("select * from candidate", (err, result) => {
    if (err) {
      errorResponse(response, err, 500);
    } else {
      successResponse(response, result);
    }
  });
});

app.post("/login", (request, response) => {
  pool.query(
    `select * from voter where email='${request.body.email}' and password='${request.body.password}'`,
    (err, result) => {
      console.log(result);
      if (err != null) errorResponse(response, err, 500);
      else {
        var token = jwt.sign({ result }, secretkey);
        var res = { token: token, name: result[0].name };
        console.log(res);
        successResponse(response, res);
      }
    }
  );
});


app.post("/vote_submission", (request, response) => {

    const voterId = parseInt(request.voter.result[0].id);
    pool.query(
      `select * from votes where voter_id = ${voterId}`,
      (err, result) => {
        if (err) {
          errorResponse(response, err, 500);
        } else if (result.length > 0) {
          errorResponse(response, "Your vote has already been submitted", 500);
        } else {
          pool.query(
            `select * from candidate where id = ${request.body.id}`,
            (err, res) => {
              if (err) {
                errorResponse(response, err, 500);
              } else if (res.length === 0) {
                errorResponse(response, "Candidate not found", 500);
              } else {
                pool.query(
                  `insert into votes (voter_id, candidate_id) value (${voterId}, ${request.body.id})`,
                  (err, re) => {
                    if (err) {
                      errorResponse(response, err, 500);
                    } else {
                      successResponse(response, re);
                    }
                  }
                );
              }
            }
          );
        }
      }
    );
  });
  

module.exports = app;
