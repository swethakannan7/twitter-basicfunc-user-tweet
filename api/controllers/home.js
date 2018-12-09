const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user").default;
const Tweet = require("../models/tweet");


exports.read_tweets = (req, res, next) => {
    User.find()
      .select("_id name")
      .exec()
      .then(docs => {
        const response = {
          count: docs.length,
          User: docs.map(doc => {
            return {
              
              _id: doc._id,
              name: doc.name,
              request: {
                type: "GET",
                url: "http://localhost:3030/" + doc._id + "/tweet/" + doc._id
              }
            };
          })
        };
        //   if (docs.length >= 0) {
        res.status(200).json(response);
        //   } else {
        //       res.status(404).json({
        //           message: 'No entries found'
        //       });
        //   }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  };