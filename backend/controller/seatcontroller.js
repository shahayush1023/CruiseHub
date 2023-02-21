const seatmodel = require('../models/seatmodel');
const reservemodel = require('../models/reserve');


module.exports.getReservation = async function getReservation(req,res){
    try {
        const seats = await seatmodel.find({});
        res.json(seats);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
      }
}

module.exports.setReservation = async function setReservation(req,res){
        try{

          const {cart}=req.body;
          for(let i=0;i<cart.length;i++)
          {
            const seatDoc=await seatmodel.findOne({seatType:cart[i].type});
            console.log(seatDoc);
            
            if(!seatDoc) throw new Error("Seat not found");
              if(cart[i].noOfSeats>seatDoc.NumberOfseats) throw new Error("booked No of seats are too much");
            seatDoc.NumberOfseats-=cart[i].noOfSeats;
            console.log(seatDoc);
            await seatDoc.save();
           
         };

         res.status(200).send({
          message:"Booking Successfull"
         }); 

        }catch(error)
        {
          res.status(401).send({
            "message":error.message
          });
        }
}


module.exports.seatbytype = async function seatbytype(req,res){
  try {
    const {type} = req.params;
    console.log(type);

   const seatdoc = await seatmodel.findOne({seatType:type});
  res.status(200).send(seatdoc);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }

}
module.exports.addseat = async function addSeat(req,res){

    try {
        const {NumberOfseats,price,seatType} = req.body;
        const seat = new seatmodel({
        NumberOfseats,
            seatType,price
        });
        await seat.save();
              res.json(seat);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
        
}

// module.exports.seatavail = async function seatavail(req, res) {
//   try {
//     let count1 = await seatmodel.countDocuments({ seatStatus:"available" , seatType:"deluxe"});
//     let count2 = await seatmodel.countDocuments({ seatStatus:"available" , seatType:"super deluxe"});
//     let count3 = await seatmodel.countDocuments({ seatStatus:"available" , seatType:"sleeper"});
//     let count4 = await seatmodel.countDocuments({ seatStatus:"available" , seatType:"recliner"});
//     res.json({ 
//       message:`total count for deluxe seat type:${count1}\ total count for super deluxe seat type:${count2}\ total count for sleeper seat type:${count3}\ total count for recliner seat type:${count4}`
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Server Error' });
//   }
// };

