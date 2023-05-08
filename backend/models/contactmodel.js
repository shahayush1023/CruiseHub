const mongoose = require("mongoose");
const emailvalid = require("email-validator");

const dblink =
  "mongodb+srv://apsadmin:shah2002@cluster0.b5a9kkd.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(dblink)
  .then(function (db) {
    console.log("db for contact us connected");
    // console.log(db);
  })
  .catch(function (err) {
    console.log(err);
  });

const contactschema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique:false,
    validate: function () {
      return emailvalid.validate(this.email);
    },
  },

  message: {
    type: String,
    required: true,
    maxLength: 500,
  },
});

const contactmodel = mongoose.model("contactmodel", contactschema);
module.exports = contactmodel;
