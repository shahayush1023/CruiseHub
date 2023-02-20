const express = require("express");
const app = express();
// const usermodel = require('./models/usermodel');
app.listen(3002);
const cookieparser = require('cookie-parser');

app.use(cookieparser());
app.use(express.json());
// app.use(cookieparser());

const userRouter = require('./routers/userrouter');
const authRouter = require('./routers/authrouter');
const seatrouter = require('./routers/seatrouter');
app.use('/user',userRouter);
app.use('/auth',authRouter);
app.use('/reservation',seatrouter);

