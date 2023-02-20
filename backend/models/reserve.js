const mongoose = require("mongoose");

const dblink="mongodb+srv://apsadmin:shah2002@cluster0.b5a9kkd.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(dblink)
.then(function(db){
    console.log('db for reservation connected');
    // console.log(db);
})
.catch(function(err){
    console.log(err);
});

const reserveSchema = new mongoose.Schema({
    // reservationNumber: {
    //     type: String,
    //     required: true
    //   },
    //   customerName: {
    //     type: String,
    //     required: true
    //   },
    //   customerContactInfo: {
    //     type: String,
    //     required: true
    //   },
    //   reservationDate: {
    //     type: Date,
    //     required: true
    //   },

      
      seat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'seatmodel'
      }
});
    const reservemodel = mongoose.model('reservemodel',reserveSchema);
    module.exports = reservemodel;