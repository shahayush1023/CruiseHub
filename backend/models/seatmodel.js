const mongoose = require("mongoose");

const dblink="mongodb+srv://apsadmin:shah2002@cluster0.b5a9kkd.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(dblink)
.then(function(db){
    console.log('db for seats connected');
    // console.log(db);
})
.catch(function(err){
    console.log(err);
});

const seatschema = mongoose.Schema({ 
       seatType: {
        type: String,
        required: true
      },
      NumberOfseats:{
        type:Number,
        default:20
     },
      price: {
        type: Number,
        required: true
      }

});

const seatmodel = mongoose.model("seatmodel",seatschema);
module.exports = seatmodel;