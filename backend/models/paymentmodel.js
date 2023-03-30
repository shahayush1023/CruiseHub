const mongoose = require("mongoose");

const dblink =
  "mongodb+srv://apsadmin:shah2002@cluster0.b5a9kkd.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(dblink)
  .then(function (db) {
    console.log("db for payment connected");
    // console.log(db);
  })
  .catch(function (err) {
    console.log(err);
  });

const paymentSchema = new mongoose.Schema(
    {
      stripeId: {
        required: true,
        type: String,
      },
    },
  );
  const paymentmodel = mongoose.model('paymentmodel',paymentSchema);
module.exports=paymentmodel;