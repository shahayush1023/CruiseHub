const mongoose = require("mongoose");

const dblink =
  "mongodb+srv://apsadmin:shah2002@cluster0.b5a9kkd.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(dblink)
  .then(function (db) {
    console.log("db for records connected");
    // console.log(db);
  })
  .catch(function (err) {
    console.log(err);
  });

const recordschema = mongoose.Schema({
  date: {
    type: String,
  },
  availability: {
    type: [Object],
  },
});

const recordmodel = mongoose.model("recordmodel", recordschema);
module.exports = recordmodel;