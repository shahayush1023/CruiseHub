const express = require("express");
const app = express();
const seatRouter = express.Router();
const {setReservation, getReservation,addseat,seatbytype} = require('../controller/seatcontroller');

seatRouter
.get('/seats',getReservation)
.get('/seats/:type',seatbytype)

seatRouter
.post('/addseat',addseat)
.post('/makereservation',setReservation)
// .get('/getseat',getseat)
// .delete('/deleteseat',deleteSeat)

// seatRouter
// .get('/seatcount',seatavail);

module.exports = seatRouter;