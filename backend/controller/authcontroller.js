const express = require("express");
const jwt = require("jsonwebtoken");
const jwtkey = "sndngu859hguo34gd";
const usermodel = require("../models/usermodel");
const contactmodel = require("../models/contactmodel");
const transporter = require("../utility/emailer");

module.exports.protectroute = async function protectroute(req, res, next) {
  try {
    let token;
    if (req.cookies.login) {
      token = req.cookies.login;
      let payload = jwt.verify(token, jwtkey);
      if (payload) {
        const user = await usermodel.findById(payload.payload);
        console.log(user);
        req.role = user.role;
        req.id = user.id;
        next();
      }
      // if(isverified){
      //     next();
      // }
      else {
        return res.json({
          message: "please login again",
        });
      }
    } else {
      req.json({
        message: "please login",
      });
    }
  } catch (err) {
    return res.json({
      message: err,
    });
  }
};

module.exports.signup = async function SignUp(req, res) {
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
      console.log("backend", obj);
      res.json({
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
};

module.exports.contactform = async function contactform(req, res) {
  try {
    let obj = req.body;
    console.log("obj>>", obj);
    let user = await contactmodel.create(obj);
    var mailOptions = {
      from: '"CruiseHub🚢" <vaishal0508@gmail.com>',
      to: obj.email,
      subject: "your review is successfully saved",
      text: `Thank you ${obj.name} for reviewing our site We are always ready to serve you ${obj.email} is saved in our database forever😊 `,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err);
      }
    });
    if (user) {
      res.json({
        message: "user send request regarding something",
        data: obj,
      });
    } else {
      res.json({
        message: "error while sending ",
      });
    }
  } catch (err) {
    console.log(err);
    res.json({
      message: err,
    });
  }
};

module.exports.getcontacts = async function getcontacts(req, res) {
  const reviews = await contactmodel.find();
  if (reviews) {
    res.json({
      success: true,
      data: reviews,
    });
  }
};

module.exports.login = async function login(req, res) {
  try {
    let data = req.body;
    console.log(data);
    if (data.uname1) {
      let user = await usermodel.findOne({ email: data.uname1 });
      if (user) {
        if (user.password == data.pass1) {
          let uid = user["_id"];
          let token = jwt.sign({ payload: uid }, jwtkey);
          console.log(token);
          if (token) {
            res.cookie("login", token, {
              expires: new Date(Date.now() + 258920000),
              httpOnly: true,
            });
            // console.log(res.cookies);
          }
          return res.status(200).json({
            message: "user has logged in",
            userdetails: user,
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
      console.log("dsvaegaeg");
      return res.json({
        message: "please enter Email",
      });
    }
  } catch (err) {
    return res.json({
      message: err,
    });
  }
};

module.exports.isAuthorised = function isAuthorised(role) {
  return function (req, res, next) {
    if (role.includes(req.role) == true) {
      next();
    } else {
      res.status(401).json({
        message: "operation not allowed",
      });
    }
  };
};

module.exports.forgetpassword = async function forgetpassword(req, res) {
  let { email } = req.body;
  try {
    const user = await usermodel.findOne({ email: email });
    if (user) {
      const resetToken = user.createResetToken();
      let resetpasswordlink = `${req.protocol}://${req.get(
        "host"
      )}/resetpassword/${resetToken}`;
      res.json({
        message: `you forgetted password is emailed to ${resetpasswordlink}`,
      });
    } else {
      return res.json({
        message: "please signup",
      });
    }
  } catch (error) {
    res.json({
      message: err.message,
    });
  }
};

module.exports.resetpassword = async function resetpassword(req, res) {
  try {
    const token = req.params.token;
    let { password, confirmpassword } = req.body;
    const user = await usermodel.findOne({ resetToken: token });
    //will save updated password in db
    if (user) {
      user.resetpasswordhandler(password, confirmpassword);
      await user.save();
      res.json({
        message: "user password changed succesfully please login again",
      });
    } else {
      res.json({
        message: "user not found",
      });
    }
  } catch (err) {
    res.json({
      message: "user not found",
    });
  }
};

module.exports.logout = function logout(req, res) {
  res.cookie("login", " ", { maxAge: 1 });
  res.json({
    message: "user logged out successfully",
  });
};
