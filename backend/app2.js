const express = require("express");
const app = express();
// const usermodel = require('./models/usermodel');
var cookieparser = require("cookie-parser");
app.use(cookieparser());

app.listen(5000);
const cors = require("cors");

app.use(express.json());
app.set('trust proxy',true);
app.use(cors({ origin: "http://localhost:3000" }));

// app.use(cookieparser());
const userRouter = require("./routers/userrouter");
// const authRouter = require('./routers/authrouter');
const seatrouter = require("./routers/seatrouter");
const recordRouter = require("./routers/recordrouter");
const paymentRouter = require("./routers/paymentrouter");
app.use("/user", userRouter);
// app.use("/auth", authRouter);
app.use("/reservation", seatrouter);
app.use("/record",recordRouter);
app.use('/payment',paymentRouter);
