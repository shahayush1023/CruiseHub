const express = require("express");
const app = express();
// const usermodel = require('./models/usermodel');
app.listen(5000);
const cookieparser = require("cookie-parser");
const cors = require("cors");

app.use(cookieparser());
app.use(express.json());

app.use(cors({ origin: "http://localhost:3000" }));

// app.use(cookieparser());
const userRouter = require("./routers/userrouter");
// const authRouter = require('./routers/authrouter');
const seatrouter = require("./routers/seatrouter");
app.use("/user", userRouter);
// app.use("/auth", authRouter);
app.use("/reservation", seatrouter);
