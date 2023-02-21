const express = require("express");
const authRouter = express.Router();
const jwt = require("jsonwebtoken");
const jwtkey = "sndngu859hguo34gd";
const usermodel = require("../models/usermodel");

authRouter
  .route("/signup")
  .get(middleware1, getSignUp, middleware2)
  .post(postSignUp);

authRouter.route("/login").post(loginuser);

// app.use(isAuthorised(['admin']))

function getSignUp(req, res, next) {
  console.log("get signup called");
  next();
  // res.sendFile('index.html',{root:__dirname});
}

async function postSignUp(req, res) {
  try {
    let obj = req.body;
    let member = await usermodel.findOne({ email: obj.email });
    if (member) {
      return res.status(400).json({
        success,
        errors: "User with this email already exsits",
      });
    }
    let user = await usermodel.create(obj);
    if (user) {
      res.status(200).json({
        message: "user signed up",
        data: obj,
      });
    } else {
      res.json({
        message: "error while signing up",
      });
    }
  } catch (err) {
    res.json({
      message: "not allowed",
    });
  }
}

function middleware1(req, res, next) {
  console.log("middleware1 encountered");
  next();
}

function middleware2(req, res) {
  console.log("middleware2 encountered");
  console.log("middle ware 2 ended req/res cycle");
  res.sendFile("index.html", { root: __dirname });
}

async function loginuser(req, res) {
  try {
    let data = req.body;
    if (data.email) {
      let user = await usermodel.findOne({ email: data.email });
      if (user) {
        if (user.password == data.password) {
          let uid = user["_id"];
          let token = jwt.sign({ payload: uid }, jwtkey);
          res.cookie("login", token, { httpOnly: true });
          return res.json({
            message: "user has logged in",
            userdetails: data,
          });
        } else {
          return res.json({
            message: "wrong credentials",
          });
        }
      } else {
        return res.json({
          message: "user not found",
        });
      }
    } else {
      return res.json({
        message: "please enter email",
      });
    }
  } catch (err) {
    return res.json({
      message: err,
    });
  }
}

module.exports = authRouter;
