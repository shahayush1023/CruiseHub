const mongoose = require("mongoose");
// mongoose.set('strictQuery',false);
mongoose.connect("mongodb://localhost:27017/studentsapi",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("connection success");
}).catch((e)=>{
    console.log("not connected");
});
