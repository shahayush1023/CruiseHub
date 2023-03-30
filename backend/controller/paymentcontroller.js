const stripe=require('../utility/stripe'); 
const paymentmodel =require('../models/paymentmodel');


module.exports.createPayment = async function createPayment(req, res, next) {
    console.log("Req.body = " , req.body);
    const { totalPrice } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
        amount: totalPrice*100,
        currency: 'usd',
        payment_method_types: ['card'],
      });
      if(!paymentIntent) res.send({
        message:"Somethig went wrong"
      });

      const payment= new paymentmodel({
        stripeId:paymentIntent.id
      });
     await payment.save();
  
    res.json({ success:true ,payment });
  };