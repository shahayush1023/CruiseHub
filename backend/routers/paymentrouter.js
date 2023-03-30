const express = require("express");
const {
 createPayment
} = require("../controller/paymentController");
const paymentRouter = express.Router();

// recordRouter.get("/seats", getReservation);
// .get('/seats/:type',seatbytype)

paymentRouter.post("/createPayment", createPayment);


module.exports = paymentRouter;