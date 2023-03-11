const express = require("express");
const {
  updateRecord,
  addRecord,
  getRecord,
  getRecordByDate,
} = require("../controller/recordController");
const app = express();
const recordRouter = express.Router();

// recordRouter.get("/seats", getReservation);
// .get('/seats/:type',seatbytype)

recordRouter.put("/updateRecord", updateRecord);
recordRouter.post("/addrecord", addRecord);
recordRouter.get("/getrecord/:id", getRecord);
recordRouter.post("/getrecordbydate", getRecordByDate);
// .post('/makereservation',setReservation)
// .get('/getseat',getseat)
// .delete('/deleteseat',deleteSeat)

// recordRouter
// .get('/seatcount',seatavail);

module.exports = recordRouter;