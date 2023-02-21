const mongoose = require("mongoose");

const emailvalid = require("email-validator");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

const dblink =
  "mongodb+srv://apsadmin:shah2002@cluster0.b5a9kkd.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(dblink)
  .then(function (db) {
    console.log("db connected");
    // console.log(db);
  })
  .catch(function (err) {
    console.log(err);
  });

const userschema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: function () {
      return emailvalid.validate(this.email);
    },
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },

  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  resetToken: String,
});

// userschema.pre('save',function(){
//     console.log('before saving in db',this);
// });

// userschema.post('save',function(doc){
//     console.log('after saving in db',doc);
// });

userschema.pre("save", function () {
  this.confirmpassword = undefined;
});

userschema.pre("save", async function () {
  let salt = await bcrypt.genSalt();
  let hashedstring = await bcrypt.hash(this.password, salt);
  this.password = hashedstring;
});

userschema.methods.createResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");
  this.resetToken = resetToken;
  return resetToken;
};

userschema.methods.resetpasswordhandler = function (password, confirmpassword) {
  this.password = password;
  this.confirmpassword = confirmpassword;
  this.resetToken = undefined;
};

const usermodel = mongoose.model("usermodel", userschema);
module.exports = usermodel;

// (async function createuser(){
//     let user={
//         name:'ayush',
//         email:'abd@gmail.com',
//         password:'12345678',
//         confirmpassword:'12345678'
//     };

//    let data = await usermodel.create(user);
//     console.log(data);
// })();
