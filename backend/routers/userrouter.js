const express = require("express");
const app = express();
const userRouter = express.Router();
const{getUser,getAllUser,postUser,deleteUser,updateUser} = require('../controller/usercontroller');
const{signup,login,isAuthorised,protectroute,logout,forgetpassword,resetpassword,contactform} = require('../controller/authcontroller');
//user's options
userRouter
.route('/:id')
.patch(updateUser)
.delete(deleteUser)


userRouter
.route('/signup')
.post(signup)

app.use(protectroute);

userRouter.post('/contactus',contactform);

userRouter
.route('/login')
.post(login)

userRouter
.route('/forgetpassword')
.post(forgetpassword)

userRouter
.route('/resetpassword/:token')
.post(resetpassword)

userRouter
.route('/logout')
.get(logout)



//user profile
userRouter
.route('/userProfile')
.get(getUser)


//admin specific
// userRouter.use(isAuthorised(['admin']));
userRouter
.route('/')
.get(getAllUser)

module.exports = userRouter;